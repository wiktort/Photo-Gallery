const settings = {
    path: "/topics/:slug/photos",
    perPage: "10",
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