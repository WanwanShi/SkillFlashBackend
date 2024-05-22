import globals from "globals";

export default [
	{ languageOptions: { globals: globals.browser } },

	{
		parser: "@typescript-eslint/parser",
		parserOptions: {
			ecmaVersion: 11,
			sourceType: "module",
		},
		plugins: ["@typescript-eslint"],
		rules: {
			"@typescript-eslint/no-explicit-any": 2,
		},
	},
];
