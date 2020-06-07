const initialState = [
    {
        id: "01",
        cardImage: "https://static3.tcdn.com.br/img/img_prod/450860/muda_da_flor_camelia_rosa_1396_1_20190611093649.jpg",
        cardName: "Camélia",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: "Camélia Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },   

    {
        id: "02",
        cardImage: "http://www.mundodeflores.com/images/coreopsis.jpg?phpMyAdmin=9ea091c51a5aa3cf876fb3cf0a5f7f3d",
        cardName: "Coreópsis",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Coreópsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },  

    {
        id: "03",
        cardImage: "https://mundonaturarte.com.br/wp-content/uploads/2019/10/sob-o-sol.jpg",
        cardName: "Geranio",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Geranio Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },
    {
        id: "04",
        cardImage: "https://www.soflor.com.br/wp-content/uploads/2014/04/sementes-de-aster-rainha-do-mercado-sortida-15-sementes-6934-410x410.jpg",
        cardName: "Aster",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Aster Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },

    {
        id: "05",
        cardImage: "https://nofigueiredo.com.br/wp-content/uploads/2013/06/1.jpg",
        cardName: "Clerodendro",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: "Clerodendro Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },

    {
        id: "06",
        cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6NPY58GjTPjkMN-7wk9V2qUfzbVkH7naZxTE_Mgv-CbsNCKxW&usqp=CAU",
        cardName: "Cravina",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Cravina Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Jardim",
    },
    {
        id: "07",
        cardImage: "https://www.sitiodamata.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/capuchinha-tropaeolum-majus..jpg",
        cardName: "Capuchinha",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Capuchinha Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Horta",
    
    },
    {
        id: "08",
        cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjxOoUYI7nradlD0yjQaIYp-A2EDWo7XcsXAYAx3V5r4P8cYf6&usqp=CAU",
        cardName: "Alho Poró",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Alho Poró Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Horta",
    },

    {
        id: "09",
        cardImage: "https://midias.agazeta.com.br/2019/12/27/pe-de-coentro-153879-article.jpg",
        cardName: "Coentro",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Coentro Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        categoria: "Horta",
    },

];

const cardList = (state = initialState, action) => {
switch (action.type) {
    case " ":
        return [ ...state, action.payload];
    default:
        return state;
}
};

const filterList = (state = initialState, action) => {
    switch (action.type) {
        case " ":
            return [ ...state, action.payload];
        default:
            return state;
    }
    };

export default cardList;