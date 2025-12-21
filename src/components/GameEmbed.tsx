interface GameEmbedProps {
	title: string;
	src: string;
}

export default function GameEmbed({ title, src }: GameEmbedProps) {
	return (
		<div className="game-container rounded-3xl overflow-hidden border-4 border-black">
			<iframe src={src} frameBorder={0} allowFullScreen allow="autoplay" title={title} />
		</div>
	);
}
