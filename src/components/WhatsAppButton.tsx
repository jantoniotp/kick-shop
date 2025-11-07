type WhatsAppButtonProps = {
    productName: string;
    };

    export default function WhatsAppButton({ productName }: WhatsAppButtonProps) {
    const phoneNumber = '522224415695';
    const message = `Hola, estoy interesado en el producto: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
    <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
    >
        <img
        src="/img/whatsapp.webp"
        alt="WhatsApp"
        className="whatsapp-icon"
        />
        Contactar
    </a>
    );
}
