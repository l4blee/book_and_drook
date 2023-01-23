const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-2b5b6b7f.js","imports":["_app/immutable/start-2b5b6b7f.js","_app/immutable/chunks/index-29f9af01.js","_app/immutable/chunks/singletons-b36a208e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3fb0129b.js'),
			() => import('./chunks/1-447ad2be.js'),
			() => import('./chunks/2-12365ce8.js'),
			() => import('./chunks/3-2daeef48.js'),
			() => import('./chunks/4-e67c7d67.js'),
			() => import('./chunks/5-dc314769.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/monster",
				pattern: /^\/monster\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
