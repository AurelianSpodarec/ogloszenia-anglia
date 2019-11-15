import Link from 'next/link';

function Header() {
    return (
        <header>
            <div>
                <div>
                    Logo
                </div>

                <div>
                    Search
                </div>

                <div>
                    Other stuff
                </div>
            </div>

            <nav className="categories">
                <Link href="/cars">
                    <a>Cars</a>
                </Link>
                <Link href="/housing">
                    <a>Housing</a>
                </Link>
            </nav>

        </header>
    )
}

export default Header;