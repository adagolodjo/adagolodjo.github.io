---
layout: page
title: Installer SOFA et tester une première scène Python
subtitle: Tutoriel — Robotique médicale
permalink: /teaching/courses/modeling-medical-sim/installation-sofa/
track: medical
page_kind: course-tutorial
---

<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="wrench" %} Installer SOFA</h1>
    <p class="subtitle">Binaire SOFA + SofaPython3, puis une première scène Python</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="timer" %} 30 à 45 min</span>
      <span class="hero-badge">{% include ph.html name="desktop" %} Linux · macOS · Windows</span>
      <span class="hero-badge">{% include ph.html name="code" %} Python 3.12</span>
    </div>
  </div>
</div>

<p><a href="{{ '/teaching/courses/modeling-medical-sim/' | relative_url }}">← Retour au cours Robotique médicale</a></p>

<div class="info-box">
  <p><strong>Public :</strong> étudiants du module Robotique médicale.<br>
  <strong>Systèmes :</strong> Linux (Ubuntu), macOS, Windows.<br>
  <strong>Durée estimée :</strong> 30 à 45 minutes.</p>
</div>


Liens de référence :
- Binaires : <https://github.com/sofa-framework/sofa/releases>
- Page de téléchargement (et compilation) : <https://www.sofa-framework.org/download/>
- Installation de SofaPython3 : <https://sofapython3.readthedocs.io/en/latest/content/Installation.html>

> Les numéros de version de ce document (SOFA v26.06.00, Python 3.12 ou 3.10) sont ceux de la page de téléchargement au moment de la rédaction. Vérifiez toujours la page des releases : si une version plus récente existe, remplacez les numéros, mais **la règle sur Python ci-dessous ne change pas**.

---

## 0. Règle d'or : la version de Python

Le binaire SOFA embarque le plugin **SofaPython3**, compilé pour **une version précise de Python** (3.12 ou 3.10 selon le fichier). Le Python installé sur votre machine doit avoir **exactement la même version mineure** (3.12.x avec un binaire « Python3.12 »).

| Situation | Conséquence |
|---|---|
| Python 3.12 installé, binaire Python3.12 | OK |
| Python 3.13 ou 3.11 installé, binaire Python3.12 | Le plugin ne se charge pas ou `import Sofa` échoue |
| Plusieurs Pythons installés | Vérifier que c'est le bon qui est utilisé (`python --version`, `which python3.12`) |

À faire **avant** de télécharger :
1. Choisir la version de Python (recommandé : 3.12).
2. Télécharger le binaire dont le nom contient la même version (`..._Linux_Python3.12...`).
3. Sur Linux, deux binaires existent (Python 3.12 et Python 3.10). Le binaire Windows et macOS indique sa version dans la page de release : la lire.

Vérification rapide : `python3.12 --version` (Linux/macOS) ou `python --version` (Windows) doit afficher `3.12.x`.

---

## 1. Télécharger le binaire

1. Ouvrir <https://github.com/sofa-framework/sofa/releases> et choisir la dernière release stable (section *Assets*).
2. Télécharger le fichier correspondant à votre système :

| OS | Fichier (exemple pour v26.06.00) |
|---|---|
| Linux | `SOFA_v26.06.00_Linux_Python3.12.zip` (ou `.run`) ; variante `Python3.10` aussi disponible |
| macOS | `SOFA_v26.06.00_MacOS.zip` |
| Windows | `SOFA_v26.06.00_Win64.zip` (ou `.exe`) |

3. (Recommandé) Vérifier la somme SHA256 donnée sur <https://www.sofa-framework.org/download/> :
   - Linux : `sha256sum fichier.zip`
   - macOS : `shasum -a 256 fichier.zip`
   - Windows (PowerShell) : `Get-FileHash fichier.zip -Algorithm SHA256`
4. Décompresser dans un dossier **sans espace ni accent** dans le chemin, par exemple `~/sofa/SOFA_v26.06.00` (Linux/macOS) ou `C:\sofa\SOFA_v26.06.00` (Windows). Ce dossier sera appelé `SOFA_ROOT`.

---

## 2. Installation sous Linux (Ubuntu)

### 2.1 Python et dépendances

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install libpython3.12 python3.12 python3-pip
python3.12 -m pip install numpy scipy
sudo apt install libopengl0        # nécessaire pour runSofa (interface graphique)
```

Sur Ubuntu 24.04, Python 3.12 est déjà le Python par défaut du système ; la ligne `add-apt-repository` n'est alors pas nécessaire. Si `pip` refuse d'installer (erreur « externally-managed-environment »), utiliser un environnement virtuel :

```bash
python3.12 -m venv ~/sofa-venv
source ~/sofa-venv/bin/activate
python -m pip install numpy scipy
```

(Dans ce cas, activer `sofa-venv` à chaque nouveau terminal avant de lancer SOFA.)

### 2.2 Variables d'environnement

Ajouter à `~/.bashrc` (adapter le chemin) :

```bash
export SOFA_ROOT=$HOME/sofa/SOFA_v26.06.00
export PYTHONPATH=$SOFA_ROOT/plugins/SofaPython3/lib/python3/site-packages:$PYTHONPATH
```

Puis `source ~/.bashrc`.

Vérifier le chemin réel du dossier `site-packages` dans votre archive (`ls $SOFA_ROOT/plugins/SofaPython3/lib/python3/`). S'il diffère, adapter `PYTHONPATH`.

### 2.3 Lancer

```bash
$SOFA_ROOT/bin/runSofa
```

---

## 3. Installation sous macOS

### 3.1 Python et dépendances (Homebrew)

```bash
brew install python@3.12
python3.12 -m pip install numpy scipy
```

Si `pip` signale « externally-managed-environment », créer un environnement virtuel comme en 2.1.

Ajouter Python 3.12 au `PATH` dans `~/.zshrc`. Le préfixe Homebrew dépend de la machine :
- Mac Apple Silicon (M1/M2/M3/M4) : `/opt/homebrew`
- Mac Intel : `/usr/local`

Vérifier avec `brew --prefix python@3.12`, puis :

```bash
export PATH="$(brew --prefix python@3.12)/bin:$PATH"
```

### 3.2 Variables d'environnement

```bash
export SOFA_ROOT=$HOME/sofa/SOFA_v26.06.00
export PYTHONPATH=$SOFA_ROOT/plugins/SofaPython3/lib/python3/site-packages:$PYTHONPATH
```

### 3.3 Autorisation de sécurité macOS

Comme l'application est téléchargée et non signée, macOS peut bloquer les exécutables (« ne peut pas être ouvert car le développeur ne peut pas être vérifié »). Solutions :
- Dans *Réglages Système > Confidentialité et sécurité*, cliquer sur **Ouvrir quand même** après le premier blocage ; ou
- Retirer l'attribut de quarantaine : `xattr -dr com.apple.quarantine $SOFA_ROOT`

La page de téléchargement renvoie aussi vers une « note pour les utilisateurs macOS » sur GitHub : la lire en cas de problème. Selon la release, une version pour Apple Silicon peut ne pas être fournie ; vérifier les *Assets*.

### 3.4 Lancer

```bash
$SOFA_ROOT/bin/runSofa
```

---

## 4. Installation sous Windows

### 4.1 Python et dépendances

1. Installer Python 3.12 **64 bits** depuis <https://www.python.org/downloads/> (cocher « Add python.exe to PATH »).
2. Dans `cmd.exe` :

```batchfile
python -V
python -m pip install numpy scipy
```

`python -V` doit afficher 3.12.x.

### 4.2 Variables d'environnement système

*Démarrer > « Modifier les variables d'environnement système » > Variables d'environnement*. Ajouter (en adaptant les chemins) :

| Variable | Valeur |
|---|---|
| `SOFA_ROOT` | `C:\sofa\SOFA_v26.06.00` |
| `PYTHON_ROOT` | `C:\Users\<vous>\AppData\Local\Programs\Python\Python312` |
| `PYTHONPATH` | `%SOFA_ROOT%\plugins\SofaPython3\lib\python3\site-packages` |

Et ajouter à la variable `Path` :

```
%PYTHON_ROOT%;%PYTHON_ROOT%\DLLs;%PYTHON_ROOT%\Lib;%SOFA_ROOT%\bin
```

Ouvrir un **nouveau** terminal pour que les variables soient prises en compte.

### 4.3 Lancer

```batchfile
runSofa -lSofaPython3
```

(l'option `-l` charge le plugin SofaPython3 ; voir la section 5 pour le charger automatiquement).

---

## 5. Charger SofaPython3 dans runSofa

Deux possibilités, au choix :

**A. Via l'interface** : lancer `runSofa`, menu *Edit > Plugin Manager*, activer `SofaPython3`, redémarrer.

**B. Automatiquement** : dans le dossier `lib` de l'installation, copier `plugin_list.conf.default` vers `plugin_list.conf` et y ajouter la ligne :

```
SofaPython3 NO_VERSION
```

Ensuite, `runSofa mon_fichier.py` ouvre directement les scènes Python (extensions `.py`, `.py3`, `.pyscn`, `.pyscn3`).

---

## 6. Tester : première scène Python

Créer un fichier `test_scene.py` :

```python
import Sofa


def createScene(root):
    root.gravity = [0, -9.81, 0]
    root.dt = 0.01

    root.addObject("RequiredPlugin", pluginName=[
        "Sofa.Component.ODESolver.Forward",
        "Sofa.Component.StateContainer",
        "Sofa.Component.Mass",
    ])

    root.addObject("DefaultAnimationLoop")

    balle = root.addChild("Balle")
    balle.addObject("EulerExplicitSolver")
    balle.addObject("MechanicalObject", name="mo", template="Vec3d",
                    position=[[0, 1, 0]])
    balle.addObject("UniformMass", totalMass=1.0)

    return root
```

### 6.1 Avec l'interface graphique

```bash
$SOFA_ROOT/bin/runSofa test_scene.py          # Linux / macOS
runSofa -lSofaPython3 test_scene.py           # Windows
```

Cliquer sur **Animate** : sans rendu visuel (aucun modèle visuel dans cette scène), vérifier dans l'onglet *Graph* / dans les données de `mo` que la position en `y` diminue (chute libre).

### 6.2 Sans interface (script Python seul)

Créer `run_headless.py` dans le même dossier :

```python
import Sofa
import Sofa.Simulation
from test_scene import createScene

root = Sofa.Core.Node("root")
createScene(root)
Sofa.Simulation.init(root)

for i in range(100):
    Sofa.Simulation.animate(root, root.dt.value)

print("Position finale :", root.Balle.mo.position.value)
```

```bash
python3.12 run_headless.py       # Linux / macOS
python run_headless.py           # Windows
```

Résultat attendu : la coordonnée `y` a nettement diminué par rapport à 1 (environ −4 après 1 s simulée ; 100 pas de 0,01 s).

---

## 7. Problèmes fréquents

| Symptôme | Cause probable | Solution |
|---|---|---|
| `ModuleNotFoundError: No module named 'Sofa'` | `PYTHONPATH` incorrect, ou terminal ouvert avant la modification | Vérifier `echo $PYTHONPATH` (`echo %PYTHONPATH%`), rouvrir le terminal |
| `import Sofa` échoue / crash au chargement | **Version de Python différente de celle du binaire** | Installer Python 3.12 si le binaire est Python3.12, ou télécharger le binaire correspondant à votre Python |
| `No module named numpy` | numpy installé dans un autre Python | Utiliser `python3.12 -m pip install numpy scipy` (même interpréteur que SOFA) |
| `runSofa` : `libOpenGL.so.0` introuvable (Linux) | Dépendance manquante | `sudo apt install libopengl0` |
| Windows : DLL introuvable (`python312.dll`, etc.) | `Path` ne contient pas `PYTHON_ROOT` et `%SOFA_ROOT%\bin` | Revoir la section 4.2 |
| Plugin SofaPython3 non chargé | Plugin non activé | Section 5 (Plugin Manager ou `plugin_list.conf`) |
| macOS : exécutable bloqué | Quarantaine Gatekeeper | `xattr -dr com.apple.quarantine $SOFA_ROOT` |
| La scène s'ouvre mais ne bouge pas | Animation non lancée | Cliquer sur **Animate** |

Pour diagnostiquer, afficher le Python réellement utilisé :

```bash
python3.12 -c "import sys; print(sys.version); print(sys.executable)"
```

---

## 8. Alternative : compiler SOFA depuis les sources

À réserver aux besoins avancés (plugins non fournis dans le binaire, modification du code). Guides : <https://www.sofa-framework.org/download/> puis la page *Build* de la documentation SOFA pour votre OS. Points clés communs :

- Récupérer les sources : `git clone -b v26.06.00 https://github.com/sofa-framework/sofa.git sofa/src`
- Prérequis : compilateur C++17, CMake >= 3.22, Boost >= 1.65.1, Eigen >= 3.2.10, Python 3.12 (même règle de version).
- Créer un environnement virtuel Python avec `numpy scipy pybind11==2.12.0`, puis pointer CMake dessus : `CMAKE_PREFIX_PATH=<venv>/lib/python3.12/site-packages` (Windows : `<venv>\Lib\site-packages`).
- Options CMake utiles : `CMAKE_BUILD_TYPE=Release` (ou `RelWithDebInfo`), `PLUGIN_XXX` pour activer un plugin ; sur Apple Silicon, `CMAKE_OSX_ARCHITECTURES=arm64`.
- Dépendances par OS :
  - Linux : `build-essential cmake ninja-build libtinyxml2-dev libopengl0 libboost-all-dev libpng-dev libjpeg-dev libtiff-dev libglew-dev zlib1g-dev libeigen3-dev python3.12-dev python3.12-venv`
  - macOS : `brew install cmake ninja tinyxml2 boost python@3.12 libpng libjpeg libtiff glew eigen`
  - Windows : Visual Studio (outils C++, ATL, MFC), CMake, Boost, Eigen, Python 3.12 ; les autres bibliothèques sont récupérées par CMake.
- Option « tout-en-un » : la méthode **pixi** décrite sur les pages de build (`pixi run -e supported-plugins build`, puis `pixi run -e supported-plugins runSofa`) évite d'installer les dépendances à la main.

Le plugin SofaPython3 doit être activé dans la configuration CMake (voir les pages *Build Options* et *Activate Plugins* de la documentation SOFA).

---

## 9. Checklist de fin de TP

<ul class="checklist">
  <li>{% include ph.html name="check-circle" %} <span><code>python --version</code> = version du binaire téléchargé</span></li>
  <li>{% include ph.html name="check-circle" %} <span><code>SOFA_ROOT</code> et <code>PYTHONPATH</code> définis dans un nouveau terminal</span></li>
  <li>{% include ph.html name="check-circle" %} <span><code>runSofa</code> s'ouvre</span></li>
  <li>{% include ph.html name="check-circle" %} <span><code>import Sofa</code> fonctionne dans Python</span></li>
  <li>{% include ph.html name="check-circle" %} <span><code>test_scene.py</code> s'ouvre dans <code>runSofa</code> et la balle chute</span></li>
  <li>{% include ph.html name="check-circle" %} <span><code>run_headless.py</code> affiche une position finale cohérente</span></li>
</ul>
