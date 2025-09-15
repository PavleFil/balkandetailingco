export function getHomepageContent() {
    const page1Content = {
        title: "Page 1 Title",
        description: "Description for page 1.",
        content: "Main content for page 1."
    };

    const page2Content = {
        title: "Page 2 Title",
        description: "Description for page 2.",
        content: "Main content for page 2."
    };

    const page3Content = {
        title: "Page 3 Title",
        description: "Description for page 3.",
        content: "Main content for page 3."
    };

    return {
        homepageTitle: "Welcome to Our Homepage",
        pages: [page1Content, page2Content, page3Content]
    };
}