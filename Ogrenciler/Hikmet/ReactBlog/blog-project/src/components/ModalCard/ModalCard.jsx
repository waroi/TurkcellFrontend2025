import { useEffect } from "react";
import styles from "./ModalCard.module.css";

function ModalCard() {
	useEffect(() => {
		const overlay = document.getElementById("overlay");

		overlay.addEventListener("click", () => {
			overlay.style.display = "none";
		});
	}, []);

	return (
		<div id="overlay" className={styles.overlay}>
			<article className={styles.modalCard}>
				<img
					src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="img"
				/>
				<div className={styles.modalCardInfo}>
					<span className=" badge">Category</span>
					<a>
						<h2>Blog Title</h2>
					</a>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
						harum sapiente mollitia quia id quam dolorum, unde aspernatur
						maiores labore. Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Libero possimus iure voluptatum maxime repellendus vero
						maiores beatae similique alias. Vitae nulla, commodi amet odit
						ducimus aliquam ab nesciunt eaque! Eum fugiat veritatis ad. Qui
						deleniti, facere nostrum eveniet, aliquam sint recusandae dolorem
						consectetur, minima ducimus ratione eum a. Illo maxime omnis optio
						eligendi. Accusamus voluptas recusandae numquam sint quis aliquam
						illo quam tempore accusantium ipsam architecto neque explicabo
						pariatur, natus enim impedit obcaecati consequuntur odit! Temporibus
						optio molestias autem et? Non deserunt doloremque consequuntur
						cupiditate ullam voluptas consectetur unde fuga id repellendus
						possimus eaque debitis dolorem laboriosam deleniti optio tenetur
						quaerat, nemo, minus tempora iste sequi aspernatur quibusdam sit!
						Tenetur sunt pariatur voluptatibus quisquam voluptate maxime ipsum
						doloribus, nihil sed dolores praesentium deleniti mollitia amet
						porro, vero aperiam laborum illo, eaque quas dolor ullam illum
						veritatis saepe expedita. Nesciunt sequi sapiente eos quam iusto
						temporibus minima veniam commodi! Perspiciatis voluptatum qui, ab
						dolore possimus hic? Dolorum, temporibus. Deserunt magni recusandae
						blanditiis porro ullam vitae, temporibus doloremque asperiores alias
						cupiditate repellat! Ea labore enim excepturi deleniti illo
						temporibus iste itaque expedita amet, quod dicta hic? Laboriosam
						maxime dolor voluptatum voluptates aut sapiente magnam! Ipsa in iste
						a vero nihil optio voluptate.Nesciunt sequi sapiente eos quam iusto
						temporibus minima veniam commodi! Perspiciatis voluptatum qui, ab
						dolore possimus hic? Dolorum, temporibus. Deserunt magni recusandae
						blanditiis porro ullam vitae, temporibus doloremque asperiores alias
						cupiditate repellat! Ea labore enim excepturi deleniti illo
						temporibus iste itaque expedita amet, quod dicta hic? Laboriosam
						maxime dolor voluptatum voluptates aut sapiente magnam! Ipsa in iste
						a vero nihil optio voluptate.Nesciunt sequi sapiente eos quam iusto
						temporibus minima veniam commodi! Perspiciatis voluptatum qui, ab
						dolore possimus hic? Dolorum, temporibus. Deserunt magni recusandae
						blanditiis porro ullam vitae, temporibus doloremque asperiores alias
						cupiditate repellat! Ea labore enim excepturi deleniti illo
						temporibus iste itaque expedita amet, quod dicta hic? Laboriosam
						maxime dolor voluptatum voluptates aut sapiente magnam! Ipsa in iste
						a vero nihil optio voluptate.Nesciunt sequi sapiente eos quam iusto
						temporibus minima veniam commodi! Perspiciatis voluptatum qui, ab
						dolore possimus hic? Dolorum, temporibus. Deserunt magni recusandae
						blanditiis porro ullam vitae, temporibus doloremque asperiores alias
						cupiditate repellat! Ea labore enim excepturi deleniti illo
						temporibus iste itaque expedita amet, quod dicta hic? Laboriosam
						maxime dolor voluptatum voluptates aut sapiente magnam! Ipsa in iste
						a vero nihil optio voluptate.
					</p>
				</div>
			</article>
		</div>
	);
}

export default ModalCard;
