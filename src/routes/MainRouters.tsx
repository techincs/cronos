import { Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home/home';
import { Blog } from '../pages/Blog/blog';
import { Servico } from '../pages/Servico/servico';
import { QuemSomos } from '../pages/QuemSomos/quemSomos';

import { AdmIntegEquipe } from '../pages/Admin/AdmIntegEquipe/admIntegEquipe';
import { AdmPost } from '../pages/Admin/AdmPost/admPost';
import { AdmServico } from '../pages/Admin/AdmServicos/admServico';

export const MainRoutes = () => {
   return(
      <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/blog" element={<Blog />}/>
           <Route path="/servico" element={<Servico />}/>
           <Route path="/quemsomos" element={<QuemSomos />}/>

           <Route path="/admin/integequipe" element={<AdmIntegEquipe />}/>
           <Route path="/admin/posts" element={<AdmPost />}/>
           <Route path="/admin/servico" element={<AdmServico />}/>
      </Routes>
   );
}
