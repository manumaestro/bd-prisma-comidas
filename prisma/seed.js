import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.comidas.createMany({
    data: [
      { nome: 'Risoto de Camarão', tipo: 'Prato Principal', preco: 45.0, descricao: 'Risoto cremoso com camarões salteados' },
      { nome: 'Filé Mignon ao Molho Madeira', tipo: 'Prato Principal', preco: 58.0, descricao: 'Medalhão de filé com redução de vinho' },
      { nome: 'Lasanha Bolonhesa', tipo: 'Prato Principal', preco: 35.0, descricao: 'Lasanha ao forno com molho bolonhesa' },
      { nome: 'Frango à Parmegiana', tipo: 'Prato Principal', preco: 32.0, descricao: 'Peito empanado coberto com molho e mussarela' },
      { nome: 'Moqueca de Peixe', tipo: 'Prato Principal', preco: 46.0, descricao: 'Cozido de peixe com leite de coco e dendê' },
      { nome: 'Camarão na Moranga', tipo: 'Prato Principal', preco: 65.0, descricao: 'Creme de camarão servido na moranga assada' },
      { nome: 'Nhoque ao Molho Gorgonzola', tipo: 'Prato Principal', preco: 36.0, descricao: 'Nhoque artesanal com molho de gorgonzola' },
      { nome: 'Costela Barbecue', tipo: 'Prato Principal', preco: 58.0, descricao: 'Costela suína assada com molho barbecue' },
      { nome: 'Espaguete ao Pomodoro', tipo: 'Prato Principal', preco: 28.0, descricao: 'Massa com molho de tomate, alho e manjericão' },
      { nome: 'Salada Caesar com Frango', tipo: 'Salada', preco: 27.0, descricao: 'Alface, frango grelhado, croutons e parmesão' },
      { nome: 'Bruschetta Tradicional', tipo: 'Entrada', preco: 18.0, descricao: 'Pão tostado com tomate, alho e manjericão' },
      { nome: 'Tartar de Salmão', tipo: 'Entrada', preco: 42.0, descricao: 'Salmão fresco picado com temperos cítricos' },
      { nome: 'Feijoada (porção)', tipo: 'Prato Principal', preco: 40.0, descricao: 'Feijoada completa com arroz, couve e laranja' },
      { nome: 'Bobó de Camarão', tipo: 'Prato Principal', preco: 44.0, descricao: 'Camarões em creme de mandioca e coco' },
      { nome: 'Hambúrguer Artesanal', tipo: 'Prato Principal', preco: 35.0, descricao: 'Burger bovino com queijo, alface e tomate' },
      { nome: 'Batata Frita (porção)', tipo: 'Acompanhamento', preco: 12.0, descricao: 'Porção de batatas crocantes' },
      { nome: 'Tiramisu', tipo: 'Sobremesa', preco: 20.0, descricao: 'Sobremesa italiana com café e mascarpone' },
      { nome: 'Brownie com Sorvete', tipo: 'Sobremesa', preco: 21.0, descricao: 'Brownie quente servido com sorvete de baunilha' },
      { nome: 'Suco Natural (Laranja)', tipo: 'Bebida', preco: 8.0, descricao: 'Suco 100% natural espremido na hora' },
      { nome: 'Caipirinha (dose)', tipo: 'Bebida', preco: 18.0, descricao: 'Coquetel brasileiro com limão e cachaça' }
    ],
  });
}

main()
  .then(() => console.log('Seed concluído com sucesso!'))
  .catch(e => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
