# 🔐 AUTH MODULE FLOW (DEVELOPER GUIDE)

## 🎯 Objective
Build a secure authentication system where:
- Users must register
- Complete payment
- Get admin approval
- Then access the system

---

# 🔁 OVERALL FLOW

Register → Payment → Admin Approval → Account Active → Login

---

# 🧩 STEP 1: USER REGISTRATION

### User Actions:
- Select role: **Supplier / Agency**
- Fill required details:
  - Full Name
  - Email
  - Password
  - Phone Number
  - Company Name
  - GST (optional)
  - Business Category
  - Experience

### System Actions:
- Validate input data
- Hash password (bcrypt)
- Create records:
  - User
  - Profile
  - Company

### Initial Status:
PENDING_PAYMENT

👉 User is created but **cannot login yet**

---

# 💳 STEP 2: PAYMENT

### User Actions:
- Redirected to payment gateway (Razorpay)
- Completes subscription payment

### System Actions:
- Verify payment (via webhook)
- Store payment details
- Create subscription record

### Status Update:
PENDING_APPROVAL

👉 Payment done, waiting for admin verification

---

# 🧑‍💼 STEP 3: ADMIN APPROVAL

### Admin Checks:
- User details
- Company information
- Payment status

### Admin Actions:

✅ If Approved:
- Status → ACTIVE  
- User can now login

❌ If Rejected:
- Status → REJECTED  
- User cannot access system

---

# 🔐 STEP 4: LOGIN PROCESS

### User Inputs:
- Email
- Password

### System Validation Flow:

1. Check if user exists  
2. Verify password  
3. Check account status  

### Access Rules:

- PENDING_PAYMENT  
  → ❌ Block login  
  → Message: "Please complete payment"

- PENDING_APPROVAL  
  → ❌ Block login  
  → Message: "Waiting for admin approval"

- REJECTED  
  → ❌ Block login  
  → Message: "Account rejected"

- ACTIVE  
  → ✅ Allow login  
  → Generate session / JWT  

---

# 👥 USER ROLES

### SUPPLIER
- Posts project requirements
- Searches agencies

### AGENCY
- Finds projects
- Submits bids

### ADMIN
- Manages users
- Approves/rejects accounts
- Controls platform

---

# 🗂️ DATA STRUCTURE OVERVIEW

User
 ├── Profile (personal details)
 ├── Company (business details)
 └── Subscription (payment info)

---

# ⚠️ IMPORTANT RULES

- User cannot login without ACTIVE status
- Payment is mandatory before approval
- Role is fixed at registration
- Admin has full control over activation

---

# 🚀 DEVELOPMENT STEPS

1. Design Prisma models  
2. Build Register API (create user + profile + company)  
3. Integrate payment gateway  
4. Handle payment webhook  
5. Build Admin approval system  
6. Build Login API with status checks  

---

# ✅ FINAL CONDITION

User can access dashboard ONLY IF:

status = ACTIVE