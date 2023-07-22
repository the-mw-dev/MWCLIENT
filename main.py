from flask import *
from pydactyl import PterodactylClient
import random
import string
from flask_discord import DiscordOAuth2Session, requires_authorization, Unauthorized
import os
import config

app = Flask('')
app.secret_key = config.secretkey
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "true"
app.config["DISCORD_CLIENT_ID"] = config.discordid
app.config["DISCORD_CLIENT_SECRET"] = config.discordsecret
app.config["DISCORD_REDIRECT_URI"] = f"{config.clienturl}/callback"

discord = DiscordOAuth2Session(app)


@app.errorhandler(500)
def ise(e):
  return render_template("500.html")


@app.route("/login/")
def login():
    return discord.create_session()


@app.route("/callback/")
def callback():
    discord.callback()
    return redirect(url_for(".red"))


@app.errorhandler(Unauthorized)
def redirect_unauthorized(e):
    return redirect(url_for("login"))


@app.route('/regen', methods=["POST", "GET"])
@requires_authorization
def regen():
    user = discord.fetch_user()
    api = PterodactylClient(config.panelipaddress, config.panelkey)
    users = api.user.list_users(email=user.email)
    print(users)
    user_id = users['data'][0]['attributes']['id']
    s1 = random.randint(0, 9)
    s2 = random.choice(string.ascii_letters)
    s3 = random.randint(0, 9)
    s4 = random.choice(string.ascii_letters)
    s5 = random.randint(0, 9)
    s6 = random.choice(string.ascii_letters)
    s7 = random.randint(0, 9)
    s8 = random.choice(string.ascii_letters)
    passw = f"{s1}{s2}{s3}{s4}{s5}{s6}{s7}{s8}"
    api.user.edit_user(user_id, user.id, user.email, user.name, user.name, password=passw)
    return render_template("index3.html", passw=passw, uname=user.name, uid=user_id, email=user.email, ava=user.avatar_url, panel=config.paneluseraddress)

@app.route('/create', methods=["POST", "GET"])
@requires_authorization
def sp():
    user = discord.fetch_user()
    api = PterodactylClient(config.panelipaddress, config.panelkey)
    users = api.user.list_users(email=user.email)
    print(users)
    user_id = users['data'][0]['attributes']['id']
    try:
        open(f'./data/{user_id}.txt', 'r')
        return render_template("createerr.html")
    except:
        with open(f'./data/{user_id}.txt', "w") as text_file:
            print('1', file=text_file)
        api.servers.create_server(f'Free Server', user_id, config.neetsid, config.eggid, 2048, 0, 4096, location_ids=[config.nodeids], cpu_limit=100, database_limit=1, allocation_limit=1, backup_limit=1, start_on_completion=False, oom_disabled=True)
        return render_template("create.html")


@app.route('/', methods=["POST", "GET"])
@requires_authorization
def red():
    user = discord.fetch_user()

    api = PterodactylClient(config.panelipaddress, config.panelkey)
    try:
        s1 = random.randint(0, 9)
        s2 = random.choice(string.ascii_letters)
        s3 = random.randint(0, 9)
        s4 = random.choice(string.ascii_letters)
        s5 = random.randint(0, 9)
        s6 = random.choice(string.ascii_letters)
        s7 = random.randint(0, 9)
        s8 = random.choice(string.ascii_letters)
        passw = f"{s1}{s2}{s3}{s4}{s5}{s6}{s7}{s8}"
        result = api.user.create_user(user.id, user.email, user.name, user.name, password=passw)
        user_id = result['attributes']['id']
        return render_template("index.html", searchword=passw, uname=user.name, uid=user_id, email=user.email, ava=user.avatar_url, panel=config.paneluseraddress)
    except:
        users = api.user.list_users(email=user.email)
        user_id = users['data'][0]['attributes']['id']
        return render_template("index2.html", uname=user.name, uid=user_id, email=user.email, ava=user.avatar_url, panel=config.paneluseraddress)





app.run(host="0.0.0.0", port=config.clientport)
