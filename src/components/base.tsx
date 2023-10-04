import { liveReloadScript } from 'beth-stack/dev'
import { type PropsWithChildren } from 'beth-stack/jsx'
import { config } from '../env'

const safeScript = config.env.NODE_ENV === 'development' ? liveReloadScript() : ''

export const BaseHtml = ({ children }: PropsWithChildren) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Eirik Mo</title>
			<script src="https://unpkg.com/htmx.org@1.9.5" />
			<script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js" />
			<script src="https://unpkg.com/hyperscript.org@0.9.11" />
            <link href='/public/globals.css' rel='stylesheet' />
			<script>{safeScript}</script>
		</head>
		<body hx-boost="true" class="h-screen">
			<h1 class=" bg-blue-500 p-5 text-center text-3xl font-bold text-white shadow-md">Eirik Mo - Portfolio</h1>
			{children}
		</body>
	</html>
)
