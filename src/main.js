import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignInPage from "./page/signIn";
import SignUpPage from "./page/signUp";
import Dashboard from "./page/admin/dashboard";
import NewsAd from "./page/admin/news";
import NewsAdd from "./page/admin/newsAdd";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content;
}

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/news": () => {
        render(NewsPage.print());
    },
    "/signup": () => {
        render(SignUpPage.print());
    },
    "/signin": () => {
        render(SignInPage.print());
    },


    "/admin": () => {
        render(Dashboard.print());
    },
    "/admin/dashboard": () => {
        render(Dashboard.print());
    },
    "/admin/news": () => {
        render(NewsAd.print());
    },
    "/admin/news/add": () => {
        render(NewsAdd.print())
    },
    "/admin/news/:id/edit": () => {

    }
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();