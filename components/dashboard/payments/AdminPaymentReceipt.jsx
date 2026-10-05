"use client";

import { useEffect, useState } from "react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDateOnly = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatAmount = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount || 0);
};

const numberToWords = (amount) => {
  const number = Math.round(Number(amount || 0));

  if (number === 0) {
    return "Zero Rupees Only";
  }

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const convert = (num) => {
    if (num < 20) {
      return ones[num];
    }

    if (num < 100) {
      return (
        tens[Math.floor(num / 10)] +
        (num % 10 ? ` ${ones[num % 10]}` : "")
      );
    }

    if (num < 1000) {
      return (
        `${ones[Math.floor(num / 100)]} Hundred` +
        (num % 100 ? ` ${convert(num % 100)}` : "")
      );
    }

    if (num < 100000) {
      return (
        `${convert(Math.floor(num / 1000))} Thousand` +
        (num % 1000 ? ` ${convert(num % 1000)}` : "")
      );
    }

    if (num < 10000000) {
      return (
        `${convert(Math.floor(num / 100000))} Lakh` +
        (num % 100000
          ? ` ${convert(num % 100000)}`
          : "")
      );
    }

    return (
      `${convert(Math.floor(num / 10000000))} Crore` +
      (num % 10000000
        ? ` ${convert(num % 10000000)}`
        : "")
    );
  };

  return `${convert(number)} Rupees Only`;
};

export default function AdminPaymentReceipt({
  paymentId,
  onClose,
}) {
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReceipt = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/v1/admin/payments/${paymentId}`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Unable to fetch payment receipt"
          );
        }

        setReceipt(result.data);
      } catch (error) {
        console.error(error);
        setError(
          error.message ||
            "Unable to load receipt"
        );
      } finally {
        setLoading(false);
      }
    };

    if (paymentId) {
      fetchReceipt();
    }
  }, [paymentId]);

  const generatePDF = async () => {
    if (!receipt) return;

    const doc = new jsPDF();

    const issuer = receipt.issuer;
    const customer = receipt.customer;
    const business = receipt.business;
    const subscription = receipt.subscription;
    const payment = receipt.payment;

    /*
     * Header
     */
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(issuer.name, 20, 25);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(issuer.address, 20, 32);
    doc.text(`Email: ${issuer.email}`, 20, 38);

    if (issuer.gstin) {
      doc.text(`GSTIN: ${issuer.gstin}`, 20, 44);
    }

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("PAYMENT RECEIPT", 190, 25, {
      align: "right",
    });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Receipt No: ${receipt.receiptNumber}`,
      190,
      32,
      { align: "right" }
    );

    doc.text(
      `Receipt Date: ${formatDateOnly(
        payment.paidAt || payment.createdAt
      )}`,
      190,
      38,
      { align: "right" }
    );

    /*
     * Customer section
     */
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Customer Details", 20, 58);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Name: ${customer.name}`,
      20,
      66
    );

    doc.text(
      `Email: ${customer.email}`,
      20,
      72
    );

    doc.text(
      `Phone: ${customer.phone || "-"}`,
      20,
      78
    );

    /*
     * Business section
     */
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Business Details", 110, 58);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Company: ${business?.name || "-"}`,
      110,
      66
    );

    doc.text(
      `Business Type: ${
        business?.businessType || "-"
      }`,
      110,
      72
    );

    doc.text(
      `GST Number: ${
        business?.gstNumber || "-"
      }`,
      110,
      78
    );

    doc.text(
      `PAN Number: ${
        business?.panNumber || "-"
      }`,
      110,
      84
    );

    /*
     * Payment table
     */
    autoTable(doc, {
      startY: 98,

      head: [
        [
          "Description",
          "Plan",
          "Billing",
          "Amount",
        ],
      ],

      body: [
        [
          "Subscription Payment",
          subscription?.plan?.name || "-",
          subscription?.billingCycle || "-",
          formatAmount(
            payment.amount,
            payment.currency
          ),
        ],
      ],

      styles: {
        fontSize: 10,
        cellPadding: 5,
      },

      headStyles: {
        fontStyle: "bold",
      },
    });

    let currentY =
      doc.lastAutoTable.finalY + 15;

    /*
     * Payment information
     */
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      "Payment Information",
      20,
      currentY
    );

    currentY += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Payment Status: ${payment.status}`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Payment Mode: Online (Razorpay)`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Razorpay Payment ID: ${
        payment.razorpayPaymentId || "-"
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Razorpay Order ID: ${
        payment.razorpayOrderId || "-"
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Payment Date: ${formatDate(
        payment.paidAt || payment.createdAt
      )}`,
      20,
      currentY
    );

    /*
     * Subscription period
     */
    currentY += 15;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");

    doc.text(
      "Subscription Details",
      20,
      currentY
    );

    currentY += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      `Plan: ${
        subscription?.plan?.name || "-"
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Billing Cycle: ${
        subscription?.billingCycle || "-"
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Start Date: ${
        formatDateOnly(
          subscription?.startDate
        )
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Valid Till: ${
        formatDateOnly(
          subscription?.endDate
        )
      }`,
      20,
      currentY
    );

    currentY += 6;

    doc.text(
      `Subscription Status: ${
        subscription?.status || "-"
      }`,
      20,
      currentY
    );

    /*
     * Amount in words
     */
    currentY += 15;

    doc.setFont("helvetica", "bold");

    doc.text(
      `Amount Paid: ${formatAmount(
        payment.amount,
        payment.currency
      )}`,
      20,
      currentY
    );

    currentY += 7;

    doc.setFont("helvetica", "normal");

    doc.text(
      `Amount in Words: ${numberToWords(
        payment.amount
      )}`,
      20,
      currentY
    );

    /*
     * Declaration
     */
    currentY += 18;

    doc.setFontSize(9);

    doc.text(
      "Declaration: This receipt confirms the successful",
      20,
      currentY
    );

    doc.text(
      "payment received through Razorpay for the selected subscription plan.",
      20,
      currentY + 5
    );

    /*
     * Footer
     */
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");

    doc.text(
      "Authorized Signatory",
      190,
      260,
      { align: "right" }
    );

    doc.setFont("helvetica", "normal");

    doc.text(
      issuer.name,
      190,
      267,
      { align: "right" }
    );

    doc.setFontSize(8);

    doc.text(
      "This is a computer-generated receipt.",
      105,
      285,
      { align: "center" }
    );

    doc.save(
      `${receipt.receiptNumber}.pdf`
    );
  };

  return (
    <div className="admin-payment-modal-overlay">
      <div className="admin-payment-modal">

        <div className="admin-payment-modal-header">
          <div>
            <h2>Payment Receipt</h2>

            {receipt && (
              <p>
                {receipt.receiptNumber}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="admin-payment-modal-close"
          >
            ×
          </button>
        </div>

        {loading && (
          <div className="admin-payment-receipt-loading">
            Loading receipt...
          </div>
        )}

        {error && (
          <div className="admin-payment-error">
            {error}
          </div>
        )}

        {receipt && !loading && (
          <div className="admin-payment-receipt-content">

            {/* Receipt header */}
            <div className="admin-receipt-top">
              <div>
                <h3>
                  {receipt.issuer.name}
                </h3>

                <p>
                  {receipt.issuer.address}
                </p>

                <p>
                  {receipt.issuer.email}
                </p>
              </div>

              <div className="admin-receipt-title">
                <h2>PAYMENT RECEIPT</h2>

                <p>
                  Receipt No:{" "}
                  <strong>
                    {receipt.receiptNumber}
                  </strong>
                </p>

                <p>
                  Date:{" "}
                  {formatDateOnly(
                    receipt.payment.paidAt ||
                      receipt.payment.createdAt
                  )}
                </p>
              </div>
            </div>

            {/* Customer */}
            <div className="admin-receipt-grid">

              <div>
                <h4>Customer Details</h4>

                <p>
                  <strong>Name:</strong>{" "}
                  {receipt.customer.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {receipt.customer.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {receipt.customer.phone ||
                    "-"}
                </p>
              </div>

              <div>
                <h4>Business Details</h4>

                <p>
                  <strong>Company:</strong>{" "}
                  {receipt.business?.name ||
                    "-"}
                </p>

                <p>
                  <strong>Business Type:</strong>{" "}
                  {receipt.business
                    ?.businessType || "-"}
                </p>

                <p>
                  <strong>GST:</strong>{" "}
                  {receipt.business
                    ?.gstNumber || "-"}
                </p>

                <p>
                  <strong>PAN:</strong>{" "}
                  {receipt.business
                    ?.panNumber || "-"}
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="admin-receipt-section">
              <h4>Payment Details</h4>

              <div className="admin-receipt-details">

                <div>
                  <span>Plan</span>
                  <strong>
                    {receipt.subscription
                      ?.plan?.name || "-"}
                  </strong>
                </div>

                <div>
                  <span>Billing Cycle</span>
                  <strong>
                    {receipt.subscription
                      ?.billingCycle || "-"}
                  </strong>
                </div>

                <div>
                  <span>Amount</span>
                  <strong>
                    {formatAmount(
                      receipt.payment.amount,
                      receipt.payment.currency
                    )}
                  </strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>
                    {receipt.payment.status}
                  </strong>
                </div>

                <div>
                  <span>Payment ID</span>
                  <strong>
                    {receipt.payment
                      .razorpayPaymentId ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>Order ID</span>
                  <strong>
                    {receipt.payment
                      .razorpayOrderId ||
                      "-"}
                  </strong>
                </div>

                <div>
                  <span>Payment Date</span>
                  <strong>
                    {formatDate(
                      receipt.payment.paidAt ||
                        receipt.payment.createdAt
                    )}
                  </strong>
                </div>

                <div>
                  <span>Payment Mode</span>
                  <strong>
                    Online (Razorpay)
                  </strong>
                </div>
              </div>
            </div>

            {/* Subscription */}
            <div className="admin-receipt-section">
              <h4>
                Subscription Details
              </h4>

              <div className="admin-receipt-details">

                <div>
                  <span>Start Date</span>
                  <strong>
                    {formatDateOnly(
                      receipt.subscription
                        ?.startDate
                    )}
                  </strong>
                </div>

                <div>
                  <span>Valid Till</span>
                  <strong>
                    {formatDateOnly(
                      receipt.subscription
                        ?.endDate
                    )}
                  </strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>
                    {receipt.subscription
                      ?.status || "-"}
                  </strong>
                </div>
              </div>
            </div>

            {/* Amount */}
            <div className="admin-receipt-total">
              <span>Total Amount Paid</span>

              <strong>
                {formatAmount(
                  receipt.payment.amount,
                  receipt.payment.currency
                )}
              </strong>
            </div>

            {/* Actions */}
            <div className="admin-receipt-actions">

              <button
                type="button"
                onClick={generatePDF}
                className="admin-receipt-download"
              >
                Download Receipt
              </button>

              <button
                type="button"
                onClick={onClose}
                className="admin-receipt-cancel"
              >
                Close
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}