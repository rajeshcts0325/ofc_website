
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog from "@/components/sections/Blog"
import Cta2 from "@/components/sections/Cta2"
import Hero2 from "@/components/sections/Hero2"
import Items2 from "@/components/sections/Items2"
import Others2 from "@/components/sections/Others2"
import Properties2 from "@/components/sections/Properties2"
import PropertyLocation2 from "@/components/sections/PropertyLocation2"
import PropertyLocation3 from "@/components/sections/PropertyLocation3"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<Hero2 />
				<Others2 />
				<About2 />
				<Properties2 />
				<PropertyLocation2 />
				<PropertyLocation3 />
				<Items2 />
				<Testimonial2 />
				<Blog />
				<Cta2 />

			</Layout>
		</>
	)
}