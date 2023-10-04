import { Elysia } from 'elysia'
import { BaseHtml } from '../components/base'
import { ctx } from '../context'

export const index = new Elysia().use(ctx).get('/', async ({ htmlStream }) => {
	return htmlStream(() => (
		<BaseHtml>
			<a
				href="#content"
				class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 to-blue-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
			>
				Skip to Content
			</a>
			<div class="flex gap-4">
				<aside class="hidden md:block max-h-screen flex-1 sticky top-0 w-full max-w-sm py-20 px-10 space-y-10">
					<header class="space-y-2"><h1 class="text-4xl">Eirik Mo</h1>
                    <p class="text-xl">Role</p>
					<p class="text-muted-foreground">
						Short about me Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, numquam. Ullam reprehenderit labore
					</p>
                    </header>
					<nav class="flex flex-col">
						<a href="#about">About</a>
						<a href="#projects">Projects</a>
						<a href="#work">Work</a>
						<a href="#showcase">Showcase</a>
					</nav>
				</aside>

				<main class="w-full py-20 space-y-20 flex-[2] h-full flex flex-col">
					<section class="p-4 space-y-4 min-h-screen">
						<h2 class="text-3xl px-4" id="about">
							About
						</h2>
						<div class="p-4 text-muted-foreground">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
					</section>
					<section class="p-4 space-y-4 min-h-screen">
						<h2 class="text-3xl px-4" id="projects">
							Projects
						</h2>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
					</section>

					<section class="p-4 space-y-4 min-h-screen">
						<h2 class="text-3xl px-4" id="work">
							Work
						</h2>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
					</section>
					<section class="p-4 space-y-4 min-h-screen">
						<h2 class="text-3xl px-4" id="showcase">
							Showcase
						</h2>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
						<div class="hover:bg-green-500/50 text-muted-foreground border hover:border-green-200 border-transparent rounded-xl p-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae reprehenderit dolor vel
							inventore? Modi, eius! Temporibus, dicta, voluptate vel assumenda velit maxime ut corporis ipsum, in
							mollitia consequatur dolorem?
						</div>
					</section>
					<footer class="p-4">
						<p>
							Designed in{' '}
							<a
								href="https://www.figma.com/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								Figma
							</a>{' '}
							and coded in{' '}
							<a
								href="https://code.visualstudio.com/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								VS Code
							</a>{' '}
							. Built with{' '}
							<a
								href="https://elysiajs.com/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								Elysia.js
							</a>{' '}
							and{' '}
							<a
								href="https://tailwindcss.com/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								Tailwind CSS
							</a>
							, deployed with{' '}
							<a
								href="https://vercel.com/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								Vercel
							</a>
							. All text is set in the{' '}
							<a
								href="https://rsms.me/inter/"
								class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
								target="_blank"
								rel="noreferrer"
							>
								Inter
							</a>{' '}
							typeface.
						</p>
					</footer>
				</main>
			</div>
		</BaseHtml>
	))
})
