
Go to file
t
Add file
Folders and files
Name		
Latest commit
gregrickaby
gregrickaby
dependency bump
f96ec36
 · 
3 days ago
History
.github
bump actions from v3 to v4
6 months ago
app
use latest create-next-app
6 months ago
public
initial commit for app router support
last year
.eslintrc.json
use latest create-next-app
6 months ago
.gitignore
use latest create-next-app
6 months ago
LICENSE
bump license
2 years ago
README.md
Update README.md
last month
next.config.mjs
use latest create-next-app
6 months ago
package-lock.json
dependency bump
3 days ago
package.json
dependency bump
3 days ago
postcss.config.js
use latest create-next-app
6 months ago
tailwind.config.ts
use latest create-next-app
6 months ago
tsconfig.json
use latest create-next-app
6 months ago
Repository files navigation
README
MIT license
Next.js GitHub Pages
Deploy Next.js to GitHub Pages with GitHub Actions. View the deployed app 🚀

Now with Next.js App Router support! If you need Pages Router support click here.

⚠️ Heads up! GitHub Pages does not support serverless or edge functions. This means dynamic functionality will be disabled. See all the unsupported features.

Configure Next.js
Next.js Config
First, you need to configure Next.js to deploy static exports. This is required for GitHub Pages to work.

Open the next.config.mjs file
Add the following:
/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
