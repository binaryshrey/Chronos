import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navigation = [
  { name: 'LinkedIn', href: 'https://in.linkedin.com/in/shreyanshsaurabh' },
  { name: 'Github', href: 'https://github.com/binaryshrey/Chronos' },
  { name: 'Public', href: 'https://github.com/binaryshrey/Chronos' },

]

const Footer = () => { 
    return (
    <footer className="px-4 md:px-6 mb-4">
      <div className="container mx-auto">
        <div className="border-t border-muted-foreground/20 pt-4 flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground opacity-70">&copy; 2024 Chronos Inc.  All rights reserved.</div>
          <div >
            <div className="flex items-center gap-4">
              <a href={navigation[0].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                <LinkedInIcon className="h-5 w-5 text-muted-foreground hover:text-foreground opacity-70" />
              </a>

              <a href={navigation[1].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                <GitHubIcon className="h-5 w-5 text-muted-foreground hover:text-foreground opacity-70" />
              </a>

              <a href={navigation[1].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                <PublicIcon className="h-5 w-5 text-muted-foreground hover:text-foreground opacity-70" />
              </a>

          </div>
          </div>
        </div>
      </div>
    </footer>
  )
 }

 export default Footer;