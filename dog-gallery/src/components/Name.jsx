//React'te, JSX (JavaScript XML), HTML benzeri bir yapıdır ancak içinde JavaScript ifadeleri kullanabilirsiniz. JSX içinde, doğrudan JavaScript yazmak mümkün değildir, ancak JavaScript kodu yazmak için süslü parantez {} kullanılır. Bu süslü parantezler, React'e, içindeki ifadenin bir JavaScript kodu olduğunu ve bu ifadeyi çözümleyip render etmesi gerektiğini bildirir. JSX içinde düz metin yazmak basittir, ancak dinamik bir değer veya JavaScript kodu eklemek için süslü parantez kullanılır.
//!Bu örnekte, name bir prop'tır. Prop, bileşenin dışarıdan aldığı verilerdir. Bu prop, bileşenin dışındaki bir yerden (genellikle App.js veya başka bir bileşen) geçirilir ve JSX içinde kullanılmak üzere React bileşenine aktarılır. Örnek: <Name name="John" /> Burada name="John" ifadesi, Name bileşenine bir prop olarak geçirilir.name propuna John değeri yolladık. Bu sayede, dinamik veri (prop olarak geçirilen name değeri) sayfada doğru şekilde render edilir.

//?Buradaki name ler karışık geliyor.SOR.

const Name = ({name}) => {
  return (
    <div>
      <h2>Name:{name}</h2>
    </div>
  );
};
export default Name;
