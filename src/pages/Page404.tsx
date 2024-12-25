import { TITLE_CLASS } from "../constants/stylesClass";

import Link from "../elements/Link";

export const Page404 = () => {
    const titleClass = `${TITLE_CLASS} flex`;

    return (
        <main className="h-screen grid place-content-center text-xl">
            <section className="max-w-screen-sm mx-auto p-4 flex items-center flex-col gap-8">
                <h1 className={titleClass}>404</h1>
                <img loading="lazy" decoding="async" src="/assets/others/this-is-fine-404.gif"></img>
                <Link href="/" title="Regresa a la página principal" isActive>
                    Regresa a la página principal
                </Link>
            </section>
        </main>
    );
};

export default Page404;
