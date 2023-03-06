import { type SocialLinkTypes } from "../../types";
import { socialLinks } from "../../mocks/socialLinks";

import Link from "../../elements/Link";

export const ContactSocial = () => {
    return (
        <ul className="flex flex-wrap items-center gap-2">
            {socialLinks.map((socialLink: SocialLinkTypes) => {
                const { id, href, title, isActive, Icon } = socialLink;

                return (
                    <li key={id}>
                        <Link href={href} title={title} isActive={isActive} target="_blank">
                            <>
                                <Icon />
                                {title}
                            </>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactSocial;
