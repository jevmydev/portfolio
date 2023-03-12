import { TITLE_CLASS } from "../constants/stylesClass";

import ContactSocial from "../components/Contact/ContactSocial";
import Link from "../elements/Link";

const SocialPage = () => {
    const titleClass = `${TITLE_CLASS} flex`;

    return (
        <>
            <main className="h-screen grid place-content-center">
                <section className="max-w-screen-sm mx-auto p-4 flex flex-col gap-8">
                    <h1 className={titleClass}>Social</h1>
                    <ContactSocial />
                    <Link href="/" title="Regresa a la página principal" isActive>
                        Regresa a la página principal
                    </Link>
                </section>
            </main>
        </>
    );
};

export default SocialPage;
