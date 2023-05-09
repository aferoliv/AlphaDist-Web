import numpy as np
import pandas as pd

#
# --------------------------FUNÇÕES -ALFA DIST-------------------------
class BronstedLista:
    def __init__(self):
        self.biblioteca = "Bronsted.xlsx"
        self.dados_pKa = pd.read_excel(self.biblioteca)
        lista=self.dados_pKa.iloc[:,0]
        self.lista_sistemas=lista.values.tolist()
        self.dados_pKa.columns = self.dados_pKa.iloc[0]

class BronstedDados:

    def __init__(self,selecao):
        lista_ABB=BronstedLista()
        self.valores = lista_ABB.dados_pKa.iloc[selecao,:]          #[selecao, :]
        self.sistema = lista_ABB.dados_pKa.iloc[selecao, 0]
        self.NH2=lista_ABB.dados_pKa.iloc[selecao, 1]
        self.carga=lista_ABB.dados_pKa.iloc[selecao, 2]
        self.nCOO=lista_ABB.dados_pKa.iloc[selecao, 3]
        self.pKa=lista_ABB.dados_pKa.iloc[selecao, 4:12]
        self.conc=0

    def linhas(self,selecao, dados_pKa):
        self.valores_linha = dados_pKa.iloc[selecao]
        valor=self.valores_linha
        return valor

    def alfas(self,pH):
        pH=float(pH)
        valores_linha=list(self.valores)
        sistema = valores_linha[0]
        carga_max = valores_linha[2]
        N_pKa = valores_linha[1] + valores_linha[3]
        pKas = valores_linha[4:11]
        pKa_beta = []
        pKa_beta.append(0)
        for i in range(0, 7):
            if i > (N_pKa - 1):
                pass
            else:
                if pKas[i] == '':
                    print('inconsistência no número de pKas e seus valores')
                else:
                    pKa_beta.append((pKa_beta[i] + pKas[i]))
        beta_np = np.array(pKa_beta)
        pH_np = np.arange(N_pKa + 1) * pH

        dif_alfa = pH_np - beta_np
        expo_alfa = 10 ** dif_alfa
        alfa_valores = expo_alfa / (1 + (expo_alfa.sum() - 1))
        #
        cargas = np.arange(start=carga_max, stop=(carga_max - N_pKa - 1), step=-1)
        carga_efetiva = sum([cargas[i] * alfa_valores[i] for i in range(0, N_pKa + 1)])

        return (pKas, alfa_valores, carga_efetiva)

    def intervalo_pH(self, valores_linha):
        dados = []
        carga = []
        resolucao = 10
        x = []
        for i in range(0, 14 * resolucao, 1):
            pH1 = i / resolucao
            pKas, temp1, temp2 = self.alfas(pH1)
            dados.append(temp1)
            carga.append(temp2)
            x.append(pH1)

        return (x, dados, carga)


class Meio:#
    def __init__(self,pH):
        self.pKw = 14
        self.wat=10**(-pH)-10**(pH-self.pKw)

