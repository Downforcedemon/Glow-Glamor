graph TD;
    App-->Header;
    App-->Footer;
    App-->Routes;
    Routes-->Home[("Home /")];
    Routes-->AboutUs[("About Us /about")];
    Routes-->ContactUs[("Contact Us /contact")];
    Routes-->Blog[("Blog /blog")];
    Routes-->Store[("Store /store")];

    Header-->LinkHome[("Link to /")];
    Header-->LinkAboutUs[("Link to /about")];
    Header-->LinkContactUs[("Link to /contact")];
    Header-->LinkBlog[("Link to /blog")];
    Header-->LinkStore[("Link to /store")];

    style App fill:#f9f,stroke:#333,stroke-width:4px
    style Header fill:#ccf,stroke:#333,stroke-width:2px
    style Footer fill:#ccf,stroke:#333,stroke-width:2px
    style Routes fill:#cfc,stroke:#333,stroke-width:2px

