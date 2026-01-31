# Substack Blog

A minimal Next.js blog that automatically pulls posts from your Substack RSS feed with email signup integration. Deploy to Vercel with one click!

## Features

- ✨ Minimal, clean design with Tailwind CSS
- - 📡 Automatically fetches posts from your Substack RSS feed
  - - 📧 Email signup form for new subscribers
    - - 🔄 Posts sorted by newest first
      - - ⚡ Fast, production-ready Next.js app
        - - 🚀 Deploy to Vercel in seconds
          - - 📱 Fully responsive design
           
            - ## Getting Started
           
            - ### Prerequisites
           
            - - Node.js 18+ and npm
              - - A Substack account
                - - A Vercel account (for deployment)
                 
                  - ### Local Setup
                 
                  - 1. Clone this repository:
                    2. ```bash
                       git clone https://github.com/yourusername/substack-blog.git
                       cd substack-blog
                       ```

                       2. Install dependencies:
                       3. ```bash
                          npm install
                          ```

                          3. Create a `.env.local` file in the root directory:
                          4. ```env
                             NEXT_PUBLIC_SUBSTACK_RSS_URL=https://yourname.substack.com/feed
                             NEXT_PUBLIC_SITE_NAME=Your Blog Name
                             NEXT_PUBLIC_SITE_DESCRIPTION=Your blog description
                             ```

                             Replace the Substack URL with your own (find it at: https://yourname.substack.com/feed)

                             4. Run the development server:
                             5. ```bash
                                npm run dev
                                ```

                                5. Open http://localhost:3000 in your browser
                               
                                6. ## Project Structure
                               
                                7. ```
                                   substack-blog/
                                   ├── app/
                                   │   ├── page.js          # Home page with blog list
                                   │   ├── layout.js        # Root layout
                                   │   └── globals.css      # Tailwind styles
                                   ├── lib/
                                   │   └── rss-parser.js    # RSS feed fetching logic
                                   ├── components/
                                   │   ├── BlogList.js      # Blog posts display
                                   │   ├── EmailSignup.js   # Newsletter signup form
                                   │   └── Header.js        # Header component
                                   ├── public/              # Static files
                                   ├── package.json
                                   ├── next.config.js
                                   └── tailwind.config.js
                                   ```

                                   ## Deployment

                                   ### Deploy to Vercel

                                   1. Push your code to GitHub
                                   2. 2. Go to https://vercel.com
                                      3. 3. Click "New Project" and select your repository
                                         4. 4. Add your environment variables in the Vercel dashboard:
                                            5.    - `NEXT_PUBLIC_SUBSTACK_RSS_URL`
                                                  -    - `NEXT_PUBLIC_SITE_NAME`
                                                       -    - `NEXT_PUBLIC_SITE_DESCRIPTION`
                                                            - 5. Click "Deploy"
                                                             
                                                              6. Your blog will be live in seconds!
                                                             
                                                              7. ## Customization
                                                             
                                                              8. ### Change Colors & Styling
                                                             
                                                              9. Edit `app/globals.css` and `tailwind.config.js` to customize colors and fonts.
                                                             
                                                              10. ### Update Header/Footer
                                                             
                                                              11. Edit `components/Header.js` and add a footer component in `app/layout.js`
                                                             
                                                              12. ### Add More Features
                                                             
                                                              13. The blog is built with Next.js, so you can easily:
                                                              14. - Add a contact form
                                                                  - - Add blog post categories
                                                                    - - Add comments
                                                                      - - Add analytics
                                                                       
                                                                        - ## How It Works
                                                                       
                                                                        - 1. The app fetches your Substack RSS feed on every page load
                                                                          2. 2. Posts are parsed and sorted by date (newest first)
                                                                             3. 3. Email signups are sent to your email or email service
                                                                               
                                                                                4. ## Environment Variables
                                                                               
                                                                                5. - `NEXT_PUBLIC_SUBSTACK_RSS_URL` - Your Substack RSS feed URL
                                                                                   - - `NEXT_PUBLIC_SITE_NAME` - Your website title
                                                                                     - - `NEXT_PUBLIC_SITE_DESCRIPTION` - Your website description
                                                                                      
                                                                                       - ## Troubleshooting
                                                                                      
                                                                                       - **Posts not showing?**
                                                                                       - - Check that your RSS feed URL is correct
                                                                                         - - Verify your Substack account is public
                                                                                           - - Check browser console for errors
                                                                                            
                                                                                             - **Email signup not working?**
                                                                                             - - Verify the email service is configured
                                                                                               - - Check that form submission is reaching your endpoint
                                                                                                
                                                                                                 - ## License
                                                                                                
                                                                                                 - MIT - feel free to use this for anything!
                                                                                                
                                                                                                 - ## Support
                                                                                                
                                                                                                 - Questions? Check out Next.js documentation: https://nextjs.org/docs
