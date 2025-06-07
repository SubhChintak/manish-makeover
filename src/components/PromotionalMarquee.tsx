
export function PromotionalMarquee() {
  const messages = [
  "💇‍♀️ Personalized makeovers just for you",
  "💄 Enhance your natural beauty",
  "✨ Book your transformation today",
  "🎉 25% off first visit with NEWYOU15",
  "🚚 Free styling on orders Rs. 2000+",
  "📲 Follow us for latest trends",
];

  return (
    <div className="bg-accent py-2 text-dark overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {messages.map((message, index) => (
          <span key={index} className="mx-6 text-sm font-medium">
            {message}
          </span>
        ))}
        {messages.map((message, index) => (
          <span key={`repeat-${index}`} className="mx-6 text-sm font-medium">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
