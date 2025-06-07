// app/about/page.tsx
import {
	Microscope,
	Target,
	Users,
	BookOpen,
	Mail,
	MapPin,
	Calendar,
	Award,
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							About{' '}
							<span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
								GDRG
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
							Just a bunch of GBLS DAS nerds sharing cool stuff we discover!
							🔧⚡
						</p>
					</div>
				</div>

				{/* Decorative elements */}
				<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent" />
			</section>

			{/* Mission Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
								What We&apos;re All About
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
								Hey there! We&apos;re GDRG - basically a group of airsoft
								enthusiasts who got a bit obsessed with GBLS DAS systems. What
								started as &#34;let&apos;s see how this thing works&quot; turned
								into detailed breakdowns, performance tests, and way too many
								late-night discussions about hop-up mechanics! 🤓
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
								We love digging into the DAS GDR-15 and other GBLS goodies, then
								sharing what we find because... why not? If we&apos;re gonna
								take apart expensive airsoft guns anyway, might as well help the
								community learn something cool!
							</p>

							<div className="flex flex-wrap gap-4">
								<div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full">
									<Target className="w-4 h-4" />
									<span className="text-sm font-medium">
										Backyard Testing 🎯
									</span>
								</div>
								<div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full">
									<Microscope className="w-4 h-4" />
									<span className="text-sm font-medium">Nerdy Analysis 🔬</span>
								</div>
								<div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-full">
									<BookOpen className="w-4 h-4" />
									<span className="text-sm font-medium">
										Sharing is Caring 📚
									</span>
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/images/about.jpg"
								alt="Airsoft"
								width={500}
								height={500}
								className="rounded-xl shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* What We Do Section */}
			<section className="py-20 bg-white dark:bg-gray-800 transition-colors">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
							What We Actually Do
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Spoiler alert: It&apos;s mostly taking things apart, testing them
							way too much, and then writing about it because we can&apos;t help
							ourselves! 🤷‍♂️
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Research Areas */}
						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Shooting Stuff (A Lot) 🎯
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								We test accuracy, consistency, and everything else by shooting
								thousands of BBs. Our targets have seen better days!
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Taking Things Apart 🔧
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Detailed teardowns of GBLS internals because we&apos;re curious
								about every tiny spring and gear. Sometimes we even put them
								back together!
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Sharing Cool Discoveries 📝
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Writing up our findings, tips, and &#34;oops, don&apos;t do
								this&#34; moments so everyone can learn from our experiments
								(and mistakes).
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Quality Reality Checks ⭐
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Honest opinions about build quality and durability. We&apos;ll
								tell you what&apos;s awesome and what&apos;s... well, not so
								much.
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Community Vibes 🤝
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Chatting with fellow GBLS enthusiasts, answering questions, and
								learning from each other&apos;s experiences and modifications.
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
								<Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
								Ongoing Obsessions 📊
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Long-term projects tracking performance, comparing different
								setups, and following new GBLS releases. We might have a
								problem...
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
							Meet the Crew
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Just a few GBLS addicts who spend way too much time and money on
							airsoft. We promise we have other hobbies... sort of! 😅
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Team Member Cards */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
							<div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
								<span className="text-5xl font-bold text-white">🤓</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
								The Tech Guy
							</h3>
							<p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
								Everything is Tech
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Takes care of the website and everything tech-related. An avid
								airsoft gamer and a GDR-15 owner for 3+ years.
							</p>
						</div>

						<div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
							<div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
								<span className="text-5xl font-bold text-white">🔧</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
								The Tinkerer
							</h3>
							<p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
								Professional Disassembler
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Can&apos;t see a GBLS without wanting to take it apart. Has more
								spare parts than most shops and knows every screw by name.
							</p>
						</div>

						<div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
							<div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
								<span className="text-5xl font-bold text-white">🎯</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
								The What If? Guy
							</h3>
							<p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
								What If? What If? What If?
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Has a knack for coming up with absurd scenarios and testing
								them. Always on the lookout for the perfect setup!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h3 className="text-2xl font-bold text-white mb-2">
							Our Totally Scientific Numbers 📊
						</h3>
						<p className="text-blue-100">
							(It doesn&apos;t mean anything, imo lol)
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								40+
							</div>
							<div className="text-blue-100">Members</div>
							<div className="text-blue-200 text-sm">
								Who&apos;ve joined our team
							</div>
						</div>

						<div>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								15+
							</div>
							<div className="text-blue-100">GBLS Guns Tortured</div>
							<div className="text-blue-200 text-sm">
								They survived (mostly)
							</div>
						</div>
						<div>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								∞
							</div>
							<div className="text-blue-100">BBs Fired</div>
							<div className="text-blue-200 text-sm">
								Stopped counting at 50k
							</div>
						</div>
						<div>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								10
							</div>
							<div className="text-blue-100">Years of Fun</div>
							<div className="text-blue-200 text-sm">
								And many more to come!
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-white dark:bg-gray-800 transition-colors">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
								Let&apos;s Chat!
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
								Got questions? Want to share your own GBLS discoveries? Think we
								missed something important? Drop us a line! We love talking shop
								with fellow enthusiasts. 💬
							</p>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
									</div>
									<div>
										<div className="font-medium text-gray-900 dark:text-gray-100">
											Email Us
										</div>
										<div className="text-gray-600 dark:text-gray-400">
											kangheon2231@gmail.com
										</div>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
										<MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
									</div>
									<div>
										<div className="font-medium text-gray-900 dark:text-gray-100">
											Where We&apos;re At
										</div>
										<div className="text-gray-600 dark:text-gray-400">
											Everywhere the internet reaches!
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
								Want to Contribute? 🤝
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-6">
								If you&apos;ve got interesting GBLS data, cool modifications, or
								just want to share your experiences, we&apos;d love to feature
								your stuff! This community is all about sharing knowledge and
								having fun.
							</p>
							<button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50">
								<BookOpen className="w-4 h-4" />
								Coming Soon
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
