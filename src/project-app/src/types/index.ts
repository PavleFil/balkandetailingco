export interface PageContent {
    title: string;
    body: string;
    author?: string;
    date?: string;
}

export interface HomepageContent {
    header: string;
    pages: PageContent[];
}