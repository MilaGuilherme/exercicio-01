
import Index from './pages/Index.vue'
import Exercicio01 from './pages/Exercicio01.vue'
import Exercicio02 from './pages/Exercicio02.vue'
import Exercicio03 from './pages/Exercicio03.vue'
import ProductList from './components/Products/ProductsList.vue'
import ProductForm from './components/Products/ProductForm.vue'

export const routes = [
    { path: "/index", component: Index },
    { path: "/exercicio01", component: Exercicio01 },
    { path: "/exercicio02", component: Exercicio02 },
    {
      path: "/exercicio03", 
      component: Exercicio03, 
      children: [{
        path: "", component: ProductList,
      },
      {
        path: "formulario", component: ProductForm,
      }
      ]
    }
  ]