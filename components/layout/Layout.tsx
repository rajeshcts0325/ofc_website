
"use client"

import AOS from 'aos'
import 'aos/dist/aos.css'
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import AnimatedText from '../elements/animateText'
import BackToTop from '../elements/BackToTop'
// import { setupTabSwitcher } from '../elements/setupTabSwitcher'
import { useTabSwitcher } from '../elements/setupTabSwitcher'
import { setupToggleFilters } from '../elements/setupToggleFilters'
import useNiceSelect from '../elements/useNiceSelect'
import { useScrollHeader } from '../elements/useScrollHeader'
import { useSearchFormToggle } from '../elements/useSearchFormToggle'
import { useUIHandlers } from '../elements/useUIHandlers'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'
import MobileMenu from './MobileMenu'
import Search from './Search'
const BootstrapComponents = dynamic(() => import("../elements/BootstrapComponents"), { ssr: false })

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		AOS.init()
	}, [])
	// useRevealAnimation()
	useScrollHeader()
	useSearchFormToggle()

	useTabSwitcher()
	useUIHandlers()

	useNiceSelect()
	// BootstrapComponents()
	useEffect(() => {
		// Call the function after the component mounts
		setupToggleFilters()

		// Optional: Clean up event listeners when component unmounts
		return () => {
			// You could add cleanup code here if needed
			// For example, removing event listeners
		}
	}, [])
	// setupToggleFilters()

	return (
		<>
			<div id="top" />
			<AddClassBody />
			<AnimatedText />
			<BootstrapComponents />
			{!headerStyle && <Header1 />}
			{headerStyle == 1 ? <Header1 /> : null}
			{headerStyle == 2 ? <Header2 /> : null}
			{headerStyle == 3 ? <Header3 /> : null}
			{headerStyle == 4 ? <Header4 /> : null}
			{headerStyle == 5 ? <Header5 /> : null}
			<Search />
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			{children}
			{!footerStyle && < Footer1 />}
			{footerStyle == 1 ? < Footer1 /> : null}
			{footerStyle == 2 ? < Footer2 /> : null}
			{footerStyle == 3 ? < Footer3 /> : null}
			{footerStyle == 4 ? < Footer4 /> : null}
			<BackToTop target="#top" />
		</>
	)
}
