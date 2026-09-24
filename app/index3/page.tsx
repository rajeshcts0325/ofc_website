
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Cta3 from "@/components/sections/Cta3"
import Hero3 from "@/components/sections/Hero3"
import Items3 from "@/components/sections/Items3"
// import Others3 from "@/components/sections/Others3"
import Properties3 from "@/components/sections/Properties3"
import PropertyLocation4 from "@/components/sections/PropertyLocation4"
import Team2 from "@/components/sections/Team2"
import Testimonial3 from "@/components/sections/Testimonial3"
import Work from "@/components/sections/Work"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={3}>
				<Hero3 />
				{/* <Others3 /> */}
				<About3 />
				<Properties3 />
				<Work />
				<Items3 />
				<PropertyLocation4 />
				<Testimonial3 />
				<Team2 />
				<Cta3 />

			</Layout>
		</>
	)
}