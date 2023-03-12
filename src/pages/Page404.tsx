import { TITLE_CLASS } from "../constants/stylesClass";
import { Link } from "../elements/Link";

export const Page404 = () => {
    const titleClass = `${TITLE_CLASS} flex`;

    return (
        <main className="h-screen grid place-content-center text-xl">
            <section className="max-w-screen-sm mx-auto p-4 flex flex-col gap-8">
                <h1 className={titleClass}>Error 404</h1>
                <Link href="/" title="Regresa a la página principal" isActive>
                    Regresa a la página principal
                </Link>
            </section>
        </main>
    );
};

export default Page404;
