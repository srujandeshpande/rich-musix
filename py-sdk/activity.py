from discord import Discord
from discord.model import Activity
from discord.enum import Result, CreateFlags
import time

with open("application_id.txt", "r") as file:
    applicationId = int(file.read())

app = Discord(applicationId, CreateFlags.Default)

activityManager = app.GetActivityManager()

activity = Activity()
activity.State = "Listening to Beats Radio 1"
activity.Party.Id = "my_super_party_id"
# activity.Party.Size.CurrentSize = 4
# activity.Party.Size.MaxSize = 8
activity.Secrets.Join = "my_super_secret"

def callback(result):
    if result == Result.Ok:
        print("Successfully set the activity!")
    else:
        raise Exception(result)
        
activityManager.UpdateActivity(activity, callback)

# Don't forget to call RunCallbacks
while 1:
    time.sleep(1/10)
    app.RunCallbacks()