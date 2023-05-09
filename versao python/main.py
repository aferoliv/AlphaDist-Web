
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import tkinter as tk
from tkinter import ttk
from tkinter import *
from sys import exit
import BronstedClass as bc
import TelaClass as tc


def tit_AB():
    pH = 3
    meio = bc.Meio(pH)
    #
    sistema = []
    v_alfa = [0, 0]
    v_carga = [0, 0]
    v_conc = [0, 0]
    #
    sistema1 = bc.BronstedDados(3)
    sistema1.conc = 0.1
    #
    sistema2 = bc.BronstedDados(7)
    sistema2.conc = 0.1
    #
    v_conc[0] = sistema1.conc
    v_alfa[0] = sistema1.valores[1]
    v_alfa[1] = sistema2.valores[1]
    print('*******',v_alfa[1],'********')
    #
    # a,b, v_carga[0]=alfas(v_alfa[0],pH)
    # a,b, v_carga[1]=alfas(v_alfa[1],pH)
    for i in range(1, 2):
        pass
    #    t=v_carga[i]*v_conc[i]+Meio.wat
    # print('---',t,'---')


#
#
janela=tk.Tk()
listao=bc.BronstedLista()
lista=list(listao.lista_sistemas)
janela2=tc.Tela(janela,lista)
janela2.Botoes(janela)

tit_AB()
#
#
#
janela.mainloop()
