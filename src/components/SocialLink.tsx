import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import type { IconProps } from "@/components/Icon";
import { OLIVE } from "@/lib";

type SocialLinkProps = {
    readonly Icon: React.FC<IconProps>;
    readonly href: string;
    readonly label: string;
};

export function SocialLink({ href, Icon, label }: SocialLinkProps) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon width={32} height={32} stroke={OLIVE} />
            </Link>
        </motion.div>
    );
}
