interface headerData {
    title : string,
    url : string,
    subMenu : headerData[]
}
export const headerData: headerData[] = [
    {
        title : "Home",
        url : "/",
        subMenu : []
    },
    {
        title : "Services",
        url : "#Services",
        subMenu : []
    },
    {
        title : "Skills",
        url : "#Skills",
        subMenu : []
    },
    {
        title : "Works",
        url : "#Works",
        subMenu : []
    },
    {
        title : "Resume",
        url : "#Resume",
        subMenu : []
    },
    {
        title : "Testimonials",
        url : "#Testimonials",
        subMenu : []
    },
    {
        title : "Pricing",
        url : "#Pricing",
        subMenu : []
    },
    {
        title : "Blog",
        url : "#Blog",
        subMenu : []
    },
    {
        title : "Contact",
        url : "#Contact",
        subMenu : []
    },
    {
        title : "Pages",
        url : "",
        subMenu : [
            {
                title : "Works (List)",
                url : "/works-list",
                subMenu : []
            },
            {
                title : "Works (Grid)",
                url : "/works",
                subMenu : []
            },
            {
                title : "Work Single Page",
                url : "/work-single",
                subMenu : []
            },
            {
                title : "Blog",
                url : "/blog",
                subMenu : []
            },
            {
                title : "Single Post",
                url : "/blog-single",
                subMenu : []
            },
        ]
    }
]