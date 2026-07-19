import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-border-subtle py-12 mt-24 bg-bg-base relative z-10">
            <div className="max-w-350 mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-text-muted text-sm">
                <p>© {new Date().getFullYear()} Junaid Parkar. Crafted with precision.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-text-primary transition-colors uppercase tracking-widest font-mono text-xs">Twitter</a>
                    <a href="#" className="hover:text-text-primary transition-colors uppercase tracking-widest font-mono text-xs">GitHub</a>
                    <a href="#" className="hover:text-text-primary transition-colors uppercase tracking-widest font-mono text-xs">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
