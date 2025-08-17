// src/app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/app/data/services";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
};

export default ServicePage;
