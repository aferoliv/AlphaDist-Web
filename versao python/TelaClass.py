from pyperclip3 import copy
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import tkinter as tk
from tkinter import ttk
import BronstedClass as bc

class Tela:
    #
    #
    def __init__(self,master, lista):
        self.master=master
        master.geometry("900x800+200+50")
        self.title="  AlfaDist "
        master.title(self.title)
        self.lista=lista
    #
    #Criação das caixas de organização
    #
        self.caixa = tk.Frame(master, borderwidth=0, relief='groove')
        self.caixa_botao = tk.Frame(master, borderwidth=0, relief='sunken')
        self.caixa_alfa = tk.Frame(master, borderwidth=5, relief='raised')
        self.caixa_grafico = tk.Frame(master, borderwidth=10, relief='ridge')
        self.caixa_pKa = tk.Frame(master, borderwidth=5, relief='raised')
    #
    # combo -
    #
        n = tk.StringVar()
        self.combo = ttk.Combobox(self.caixa, width=27, textvariable=n, state='readonly')
        self.combo['values'] = self.lista
        self.combo['state'] = 'readonly'
        #self.combo.bind('<<ComboboxSelected>>', on_combo)
        self.combo.current(1)
        self.combo.grid(column=1, row=1, padx=10, pady=10)
    #
    #Entrada dos dados
    #
    #  CAIXA entrada de dados
    #
        self.texto1 = tk.Label(self.caixa, text='selecione o sistema ABBronsted')
        self.texto2 = tk.Label(self.caixa, text='pH selecionado')
        self.pH_escrita = tk.Entry(self.caixa)
        self.caixa.grid(column=0, row=1)
        self.texto1.grid(column=0, row=1, padx=10, pady=10)
        self.texto2.grid(column=0, row=2, padx=10, pady=10)
        self.pH_escrita.grid(column=1, row=2, padx=10, pady=10)
        #

    # CAIXA ALFAS
        self.caixa_alfa.grid(column=2, row=6, padx=10, pady=10)  # .place(height=500, width=50000)
    # CAIXA GRÁFICOS
        self.caixa_grafico.grid(column=0, row=6, padx=10, pady=10)  # .place(height=100, width=100)
    # CAIXA pKa
        self.caixa_pKa.grid(column=1, row=6, padx=10, pady=10)
        self.txt_pKa_titulo = tk.Label(self.caixa_pKa, text='------ pKa ------')

    def Botoes(self,master):
        #  CAIXA BOTÕES
        #
        self.Ok_button = tk.Button(self.caixa_botao, text="    OK     ", command=self.coleta_OK)
        self.sair_button = tk.Button(self.caixa_botao,text="     Sair    ", command=master.quit)
        self.copia = tk.Button(self.caixa_alfa,text="Copiar valores", command=self.copiar_valores)
        self.caixa_botao.grid(column=0, row=2, padx=10, pady=10)
        self.Ok_button.grid(column=1, row=5, padx=10, pady=10)
        self.sair_button.grid(column=3, row=5, padx=10, pady=10)



    def valor_pH(self):
        #
        # recolhe o valor de pH da caixa pH
        #
        pH_coleta = self.pH_escrita.get()
        if pH_coleta=='':
            pH_coleta=3
        return pH_coleta

    def numero_sistema(self):
        #
        #verifica o sistema selecionado e armazena a posição na lista.
        #
        numero_sistema=self.combo.current()
        return numero_sistema

    def arredonda(self, valor):
        #
        #  arredonda números abaixo de 10^-3 com 5 algarismos significativos
        #
        if abs(valor) > 0.001:
            texto = '{:.5f}'.format((valor))
        else:
            texto = '{:.5E}'.format((valor))
        return texto

    def Limpa_frame(self):
        for i in range(0, 7):

            txt_1 = tk.Label(self.caixa_alfa, text='                    ')
            txt_1.grid(column=6, row=5 + i, padx=10, pady=10)
            txt_2 = tk.Label(self.caixa_alfa, text='                    ')
            txt_2.grid(column=7, row=5 + i, padx=10, pady=10)
            if i<6 :
                txt_3 = tk.Label(self.caixa_pKa, text='       ')
                txt_3.grid(column=0, row=1 + i, padx=10, pady=10)
                txt_4 = tk.Label(self.caixa_pKa, text='       ')
                txt_4.grid(column=2, row=1 + i, padx=10, pady=10)

    def Lista_alfa(self, pH, alfa, carga, pKas):
        pH = (self.valor_pH())
        pH=float(pH)
        sistema =bc.Meio(pH)

        self.Limpa_frame()
        for i, item in enumerate(alfa):
            if i == 0:
                #
                self.copia.grid(column=6, row=12, padx=10, pady=10)
                #
                txt_alfa0 = tk.Label(self.caixa_alfa, text='{unicodes_value}0'.format(unicodes_value='\u03B1'))
                txt_val0 = tk.Label(self.caixa_alfa, text=self.arredonda((alfa[i])))
                txt_alfa0.grid(column=6, row=2, padx=10, pady=10)
                txt_val0.grid(column=7, row=2, padx=10, pady=10)

            elif i == 1:

                txt_alfa1 = tk.Label(self.caixa_alfa, text='{unicodes_value}1'.format(unicodes_value='\u03B1'))
                txt_val1 = tk.Label(self.caixa_alfa, text=self.arredonda((alfa[i])))
                txt_alfa1.grid(column=6, row=3, padx=10, pady=10)
                txt_val1.grid(column=7, row=3, padx=10, pady=10)
                #
                #
                if type(pKas[1]) == 'float':
                    txt_pKa1 = tk.Label(self.caixa_pKa, text='pKa')
                else:
                    txt_pKa1 = tk.Label(self.caixa_pKa, text='pKa1')
                txt_pKa1v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa1.grid(column=0, row=1, padx=10, pady=10)
                txt_pKa1v.grid(column=2, row=1, padx=10, pady=10)
                #
            elif i == 2:
                txt_alfa2 = tk.Label(self.caixa_alfa, text='{unicodes_value}2'.format(unicodes_value='\u03B1'))
                txt_val2 = tk.Label(self.caixa_alfa, text=self.arredonda((alfa[i])))
                txt_alfa2.grid(column=6, row=5, padx=10, pady=10)
                txt_val2.grid(column=7, row=5, padx=10, pady=10)
                #
                txt_pKa2 = tk.Label(self.caixa_pKa, text='pKa2')
                txt_pKa2v = tk.Label(self.caixa_pKa, text=(pKas[i - 1]))
                txt_pKa2.grid(column=0, row=2, padx=10, pady=10)
                txt_pKa2v.grid(column=2, row=2, padx=10, pady=10)
                #
            elif i == 3:

                txt_alfa3 = tk.Label(self.caixa_alfa, text='{unicodes_value}3'.format(unicodes_value='\u03B1'))
                txt_val3 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa3.grid(column=6, row=6, padx=10, pady=10)
                txt_val3.grid(column=7, row=6, padx=10, pady=10)
                #
                txt_pKa3 = tk.Label(self.caixa_pKa, text='pKa 3')
                txt_pKa3v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa3.grid(column=0, row=3, padx=10, pady=10)
                txt_pKa3v.grid(column=2, row=3, padx=10, pady=10)

            elif i == 4:
                txt_alfa4 = tk.Label(self.caixa_alfa, text='{unicodes_value}4'.format(unicodes_value='\u03B1'))
                txt_val4 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa4.grid(column=6, row=7, padx=10, pady=10)
                txt_val4.grid(column=7, row=7, padx=10, pady=10)
                #
                txt_pKa4 = tk.Label(self.caixa_pKa, text='pKa4')
                txt_pKa4v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa4.grid(column=0, row=4, padx=10, pady=10)
                txt_pKa4v.grid(column=2, row=4, padx=10, pady=10)

            elif i == 5:
                txt_alfa5 = tk.Label(self.caixa_alfa, text='{unicodes_value}5'.format(unicodes_value='\u03B1'))
                txt_val5 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa5.grid(column=6, row=8, padx=10, pady=10)
                txt_val5.grid(column=7, row=8, padx=10, pady=10)
                #
                txt_pKa5 = tk.Label(self.caixa_pKa, text='pKa 5')
                txt_pKa5v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa5.grid(column=0, row=5, padx=10, pady=10)
                txt_pKa5v.grid(column=2, row=5, padx=10, pady=10)

            elif i == 6:
                txt_alfa6 = tk.Label(self.caixa_alfa, text='{unicodes_value}6'.format(unicodes_value='\u03B1'))
                txt_val6 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa6.grid(column=6, row=9, padx=10, pady=10)
                txt_val6.grid(column=7, row=9, padx=10, pady=10)
                #
                txt_pKa6 = tk.Label(self.caixa_pKa, text='pKa 6')
                txt_pKa6v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa6.grid(column=0, row=6, padx=10, pady=10)
                txt_pKa6v.grid(column=2, row=6, padx=10, pady=10)

            elif i == 7:
                txt_alfa7 = tk.Label(self.caixa_alfa, text='{unicodes_value}7'.format(unicodes_value='\u03B1'))
                txt_val7 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa7.grid(column=6, row=10, padx=10, pady=10)
                txt_val7.grid(column=7, row=10, padx=10, pady=10)
                #
                txt_pKa7 = tk.Label(self.caixa_pKa, text='pKa 5')
                txt_pKa7v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa7.grid(column=0, row=7, padx=10, pady=10)
                txt_pKa7v.grid(column=2, row=7, padx=10, pady=10)

            elif i == 8:
                txt_alfa8 = tk.Label(self.caixa_alfa, text='{unicodes_value}8'.format(unicodes_value='\u03B1'))
                txt_val8 = tk.Label(self.caixa_alfa, text=self.arredonda(alfa[i]))
                txt_alfa8.grid(column=6, row=11, padx=10, pady=10)
                txt_val8.grid(column=7, row=11, padx=10, pady=10)
                #
                txt_pKa8 = tk.Label(self.caixa_pKa, text='pKa 5')
                txt_pKa8v = tk.Label(self.caixa_pKa, text=pKas[i - 1])
                txt_pKa8.grid(column=0, row=8, padx=10, pady=10)
                txt_pKa8v.grid(column=2, row=8, padx=10, pady=10)

        txt_qef1 = tk.Label(self.caixa_alfa, text='carga efetiva')
        txt_qef = tk.Label(self.caixa_alfa, text=self.arredonda(carga))
        txt_qef1.grid(column=6, row=i + 4, padx=10, pady=10)
        txt_qef.grid(column=7, row=i + 4, padx=10, pady=10)
        txt_wat1 = tk.Label(self.caixa_alfa, text='WAT')
        #
        txt_wat = tk.Label(self.caixa_alfa, text=self.arredonda(sistema.wat))
        txt_wat1.grid(column=6, row=i + 5, padx=10, pady=10)
        txt_wat.grid(column=7, row=i + 5, padx=10, pady=10)
        txt_pH = tk.Label(self.caixa_alfa, text=' pH ----- ' + str(pH) + ' ------- ')
        txt_pH.grid(column=7, row=1, padx=10, pady=10)

    def coleta_OK(self):
        nome_sistema = self.combo.get()
        numero_sistema=self.combo.current()
        pH = self.valor_pH()
        #
        if pH == '':
            pH = '3'
        #
        sistema=bc.BronstedDados(numero_sistema)
        pKas, alfa,carga_efetiva = sistema.alfas(pH)
        #
        #
        self.Lista_alfa(pH, alfa, carga_efetiva, pKas)
        #
        #
        x, dados, carga = sistema.intervalo_pH(numero_sistema)
        self.graficos(x, dados, carga)
        print('coleta_OK')
        return numero_sistema, pH, nome_sistema

    def copiar_valores(self):
        #
        #
        #
        numero_sistema = self.combo.current()
        pH = self.valor_pH()
        #
        if pH == '':
            pH = '3'
        sistema = bc.BronstedDados(numero_sistema)
        pKas, alfa, carga_efetiva = sistema.alfas(pH)
        copiado = ['pH ',pH]
        for i,item in enumerate(alfa):
            copiado.append('a'+str(i))
            copiado.append(item)
        copiado.append('carga efetiva')
        copiado.append(carga_efetiva)
        #a1= str(copiado[1:len(copiado)-1])
        print(copiado)
        copy(copiado)

    def graficos(self,x, dados, carga):
        figura = plt.figure(figsize=(4, 4))
        plt.subplot(211)  # linha, coluna, número do grafico
        plt.axis([0, 14, 0, 1.05])  # lista [xmin, xmax, ymin, ymax]
        plt.plot(x, dados)
        plt.subplot(212)
        plt.axis([0, 14, min(carga) - .5, max(carga) + .5])  # lista [xmin, xmax, ymin, ymax]
        plt.plot(x, carga)
        #
        #
        #
        canva = FigureCanvasTkAgg(figura, self.caixa_grafico)
        canva.get_tk_widget().grid(column=0, row=6, padx=10, pady=10)
        #
        # plt.show()