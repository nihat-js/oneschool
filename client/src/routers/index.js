import { BrowserRouter  , Routes ,Route } from "@remix-run/router";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
