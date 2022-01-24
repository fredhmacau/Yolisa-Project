from faker import Faker

fake=Faker(locale="pt_PT")


print(fake.paragraph(nb_sentences=8))