import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQItem({ question, answer, id }) {
  return (
    <AccordionItem value={id} className="border-b border-warm-gray-200">
      <AccordionTrigger className="text-left py-4 px-6 hover:bg-warm-gray-50 transition-colors">
        <span className="text-warm-gray-900 font-medium text-base leading-relaxed">
          {question}
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4">
        <div className="text-warm-gray-700 leading-relaxed text-base">
          {answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
