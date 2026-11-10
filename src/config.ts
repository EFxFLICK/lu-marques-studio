// Edite os dados deste arquivo para personalizar a demonstração.
export const business = {
  name: 'LU MARQUES STUDIO',
  owner: 'Lucineia Marques',
  city: 'Cabo Frio - RJ',
  whatsapp: '5522997631222', // Formato internacional, somente números.
  instagram: 'https://www.instagram.com/luneiamarques/',
  address: 'R. Alemanha - Jardim Caiçara, Cabo Frio - RJ, 28910-370, Brasil',
  hours: 'Todos os dias, das 10h às 20h', // Confirme os dias de funcionamento com a proprietária.
}
export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
export const defaultMessage = 'Olá! Gostaria de agendar um horário no salão. Poderiam me passar mais informações?' 