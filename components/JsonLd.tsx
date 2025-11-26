import { WithContext, Person, WebSite } from "schema-dts";

export default function JsonLd() {
    const personSchema: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Adekunle Samuel Fiyinfoluwa",
        url: "https://fiyin.ng",
        image: "https://i.pinimg.com/736x/b7/c6/50/b7c65051b225e4bcee2a961ee5eebe67.jpg",
        sameAs: [
            "https://www.linkedin.com/in/adekunle-samuel-fiyinfoluwa",
            "https://www.github.com/try-samuel",
            "https://www.x.com/try_samuell",
        ],
        jobTitle: "Full Stack Software Engineer",
        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },
        description:
            "Samuel, A Full-stack Software Engineer, Full Stack Web Developer, and Open Source Enthusiast. Building products that scale in the modern web.",
    };

    const websiteSchema: WithContext<WebSite> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Adekunle Samuel Fiyinfoluwa",
        url: "https://fiyin.ng",
        author: {
            "@type": "Person",
            name: "Adekunle Samuel Fiyinfoluwa",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
