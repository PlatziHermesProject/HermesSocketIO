import pandas as pd
import nltk 
import matplotlib.pyplot as plt
import numpy as np
nltk.download('book')
from nltk.book import *


# The Variable df_route isdefine for the route of the general data frame
df_route = '../../df_user_kw.csv'


def top5_words (user_df):
    try:
        # The next line appends all the text from letters in one list separate with
        # blank space, then put all the words in lower case, and for the last, split all
        # the words with comas.
        words_in_letters = (' '.join(user_df['message'].tolist())).lower().split()
        # The netx lines deletes all the words with length less or equal to 3 characters.
        position = 0
        print ("-----------------------------------------------------")
        print (words_in_letters)
        print("-----------------------------------------------------")
        
        for word in words_in_letters:
            if len(word) <= 4:
                del words_in_letters[position]
            position += 1
        print (words_in_letters)
        fdist_user = FreqDist(words_in_letters)
        print (fdist_user.most_common(5))
        fdist_user.plot(5)

    except:
        pass


def user_letter (df_route, user_id):
    #The next line reads the data frame file
    df = pd.read_csv(df_route)
    try:
        #The next line filter all the entries of the given user
        df_user = df[(df['user_id'] == user_id)]
        #The next line filter all the letters of the given user
        user_df = df_user[(df_user['letter'] == 1)]
        print(user_df)
        top5_words (user_df)
        return user_df

    except AttributeError:
        df = f'There some problem with the user id or the data frame route'
        return user_df


def run():
    try:
        letters ('centli')

    except:
        pass


if __name__ == '__main__':
    user_letter(df_route, 'centli')