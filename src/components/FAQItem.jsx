import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQItem({ question, answer, id }) {
  return (
    <AccordionItem value={id} className="border-b border-warm-gray-200">
      <AccordionTrigger className="text-left py-4 px-6 !text-base xs:!text-lg text-warm-gray-900 font-medium leading-relaxed">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4">
        <div className="text-size-body-large text-warm-gray-700 leading-relaxed">
          {answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
