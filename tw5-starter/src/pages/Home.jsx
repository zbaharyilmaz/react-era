import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <Container>
        {/* loading yoksa */}
        <Grid2 container justifyContent="center" spacing={4} mt={10}>
          <CategoryBar />
          {/* Products'lar map edilecek */}
          <Grid2 item key="">
            <ProductCard product="" text="Add" />
          </Grid2>
          {/* prop ile geçilecek */}
        </Grid2>
        {/* loading varsa */}
        <Grid2 container justifyContent="center" alignItems={'center'} mt={15}>
          <CircularProgress />
        </Grid2>
      </Container>
      ;
    </div>
  );
};

export default Home;