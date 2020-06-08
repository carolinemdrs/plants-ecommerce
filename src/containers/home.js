import React from 'react';
import CardContainer from '../components/cardContainer';
import Header from '../components/header';
import Menu from '../components/menu';
import FilterbyName from '../components/filter';
import styled from 'styled-components';
import Footer from '../components/footer';


const Toolbar = styled.div `
    display: flex;
    justify-content:center;


    @media (max-width:667px) and (min-width:0px)  { 
        display: flex;
        justify-content:center;
        flex-direction:column;
      }
`

const MainContainer = styled.div `
    @media (max-width:667px) and (min-width:0px)  { 
        display: flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
      }
`

const listaDePlantas = [
    {
        id: "01",
        cardImage: "https://static3.tcdn.com.br/img/img_prod/450860/muda_da_flor_camelia_rosa_1396_1_20190611093649.jpg",
        cardName: "Camélia",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: "Camélia Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },   

    {
        id: "02",
        cardImage: "http://www.mundodeflores.com/images/coreopsis.jpg?phpMyAdmin=9ea091c51a5aa3cf876fb3cf0a5f7f3d",
        cardName: "Coreópsis",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Coreópsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },  

    {
        id: "03",
        cardImage: "https://mundonaturarte.com.br/wp-content/uploads/2019/10/sob-o-sol.jpg",
        cardName: "Geranio",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Geranio Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },
    {
        id: "04",
        cardImage: "https://www.soflor.com.br/wp-content/uploads/2014/04/sementes-de-aster-rainha-do-mercado-sortida-15-sementes-6934-410x410.jpg",
        cardName: "Aster",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Aster Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },

    {
        id: "05",
        cardImage: "https://nofigueiredo.com.br/wp-content/uploads/2013/06/1.jpg",
        cardName: "Clerodendro",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: "Clerodendro Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },

    {
        id: "06",
        cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6NPY58GjTPjkMN-7wk9V2qUfzbVkH7naZxTE_Mgv-CbsNCKxW&usqp=CAU",
        cardName: "Cravina",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Cravina Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Jardim",
    },
    {
        id: "07",
        cardImage: "https://www.sitiodamata.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/capuchinha-tropaeolum-majus..jpg",
        cardName: "Capuchinha",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Capuchinha Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Horta",
    
    },
    {
        id: "08",
        cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjxOoUYI7nradlD0yjQaIYp-A2EDWo7XcsXAYAx3V5r4P8cYf6&usqp=CAU",
        cardName: "Alho Poró",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Alho Poró Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Horta",
    },

    {
        id: "09",
        cardImage: "https://midias.agazeta.com.br/2019/12/27/pe-de-coentro-153879-article.jpg",
        cardName: "Coentro",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Coentro Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Horta",
    },
    {
        id: "10",
        cardImage: "https://http2.mlstatic.com/fertilizante-adubo-Pá-orquideas-bonsais-flores-3-kg-D_NQ_NP_850776-MLB27218834324_042018-F.jpg",
        cardName: "Bokashi",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Bokashi Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Adubo",
    },
    {
        id: "11",
        cardImage: "https://cdn.awsli.com.br/600x450/211/211871/produto/15787609/85dc6c00b5.jpg",
        cardName: "Composto orgânico",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Composto orgânico Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Adubo",
    },
    {
        id: "12",
        cardImage: "https://sc01.alicdn.com/kf/UT8PwfIX2pXXXagOFbXw.jpg_350x350.jpg",
        cardName: "Biofertilizante",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Biofertilizante Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Adubo",
    },
    {
        id: "13",
        cardImage: "https://cdn.awsli.com.br/600x450/41/41127/produto/14898822/ae0caa711a.jpg",
        cardName: "Pá",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Pá Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Ferramentas",
    },
    {
        id: "14",
        cardImage: "https://a-static.mlcdn.com.br/618x463/ancinho-com-5-dentes-cabo-de-madeira-77912001-tramontina/rrmaquinas/4984/59732658ae671e9189cfb99b24a76f0e.jpg",
        cardName: "Ancinho",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Ancinho Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Ferramentas",
    },
    {
        id: "15",
        cardImage: "data:image/jpeg;base64,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",
        cardName: "Tesoura de Poda",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        fullText: " Tesoura de Poda Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        category: "Ferramentas",
    },

];


class Home extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
            cardName:"",
            listaDePlantas:listaDePlantas,
            selectedCategory: "Todas",
            currentPage:"ProductList",
            selectedProduct: undefined,
		}	
	}
    
    filterByName = (event) => {
		this.setState({cardName:event.target.value})
     }
    
	changeCategory = (newCategory) =>{
		this.setState({
			selectedCategory: newCategory
        })
     }
    
     onChangeSelectedProduct = (product) => {
		this.setState({selectedProduct:product})
	 }

     goToPage = (pageName) => {
		this.setState({ currentPage: pageName })
	}



    filterList = () => {
		return this.state.listaDePlantas.filter(produto => {
			if(this.state.selectedCategory === "Todas") {
				return true
			}
			
			if(produto.category === this.state.selectedCategory) {
				return true
            }

            if(produto.cardName === this.state.cardName) {
				return true
			}

			return false
		})     
	
    }
    

    render() {
        const productFiltredList = this.filterList()
        return(
            <MainContainer>
                <Header />
                <Toolbar>
                    <Menu changeCategory={this.changeCategory} />
                    <FilterbyName filterByName={this.filterByName} />
                </Toolbar>
                <CardContainer listaDePlantas={productFiltredList} 
                cardName={this.state.cardName}  
                selectedCategory={this.state.selectedCategory}/>
                <Footer />
            </MainContainer>
        )
    }
}

export default Home;
