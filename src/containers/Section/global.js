const settings = {
    path: "/topics/:slug/photos",
    perPage: "20",
    sort: {
        data:{
            id: "sort_by",
            content: "Sort by",
            name: "sort",
            defaultValue: "latest"
        },
        options: {
            popular: {
                value: "popular",
                content: "Most popular"
            },
            latest: {
                value: "latest",
                content: "Latest"
            }
        }
    }
};

export default settings;