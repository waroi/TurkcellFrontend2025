//Liskov Substitution Principle (LSP) :hocanın ilettiği yazıdaki uygulamaya göre düzenlendi. Alt sınıflar üst sınıfın yerine geçtiğinde hata vermemeli.OCP'ye de uygun çünkü içerde if else döndürmüyoruz.
const BaseButton = ({ children, className, ...props }) => {
  return (
    <button className={clsx(className, "btn")} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
