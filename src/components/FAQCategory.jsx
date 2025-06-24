import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "./FAQItem";
import { BookingButton } from "./BookingButton";

export function FAQCategory({ category }) {
  const { title, subtitle, questions } = category;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 overflow-hidden">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-bordeaux-50 to-bordeaux-100 px-6 py-6 border-b border-warm-gray-200">
        <h3 className="text-2xl font-bold text-warm-gray-900 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-warm-gray-600 text-base">
            {subtitle}
          </p>
        )}
      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="w-full">
        {questions.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}
