import { HomePage } from "../pages/homePage";

class homeService {
    irSeccion(nombre){
        HomePage.getListExamples().contains(nombre).should('be.visible').click();
    }
}
export const HomeService = new homeService();